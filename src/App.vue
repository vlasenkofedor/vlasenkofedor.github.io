<template>
  <div class="main-page text-center" ref="pageRef">
    <div class="main-page-inner mx-auto text-start bg-white shadow-lg position-relative">
      <div v-if="isExportVisible" class="action-buttons">
        <button
          class="action-btn"
          title="Export PDF"
          aria-label="Export to PDF"
          @click="exportPdf"
        >
          <Icon name="file-arrow-down" size="22px" />
        </button>

        <button
          v-if="isShareAvailable"
          class="action-btn"
          title="Share resume"
          aria-label="Share resume"
          @click="shareResume"
        >
          <Icon name="share-nodes" size="22px" />
        </button>
      </div>

      <Intro
        :intro-info="data.introInfo"
        :contact-info="data.contactInfo"
        :social-media-info="data.socialMediaInfo"
      />

      <div class="p-5">
        <div class="row">
          <div class="col-12">
            <Summary :summary-info="data.summaryInfo" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <Experience :experience-info="data.experinceInfo" /> <!-- data.ts keeps original key for backward compat -->
          </div>
          <div class="col-lg-4">
            <Education :education-info="data.educationInfo" />
            <Skill
              :skill-info="data.skillInfo"
              :other-skill-info="data.otherSkillInfo"
              :pro-skill-info="data.proSkillInfo"
            />
            <Interest :interest-info="data.interestInfo" />
            <Example :examples="data.examples" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <Language :language-info="data.languageInfo" />
          </div>
          <div class="col-lg-8">
            <Volunteer :volunteer-info="data.volunteerInfo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

import Intro from '@/components/Intro.vue'
import Summary from '@/components/Summary.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Language from '@/components/Language.vue'
import Interest from '@/components/Interest.vue'
import Example from '@/components/Example.vue'
import Volunteer from '@/components/Volunteer.vue'
import Skill from '@/components/Skill.vue'
import Icon from '@/components/Icon.vue'

import data from '@/data'

const pageRef = ref<HTMLElement | null>(null)
const isExporting = ref(false)
const isShareAvailable = ref(false)

const isExportVisible = computed(() => !isExporting.value)

const pdfIconUrl = new URL('./assets/images/pdf.png', import.meta.url).href

// Check Web Share API support after mount (SSR-safe, requires user gesture context)
onMounted(() => {
  isShareAvailable.value =
    typeof navigator.share === 'function' &&
    typeof navigator.canShare === 'function' &&
    navigator.canShare({ url: window.location.href })
})

async function shareResume(): Promise<void> {
  try {
    await navigator.share({
      title: 'Fedor Vlasenko — CTO & Tech Lead',
      text: 'Resume of Fedor Vlasenko',
      url: window.location.href,
    })
  } catch (error) {
    // User cancelled share or share failed — not an error worth logging
    if (error instanceof Error && error.name !== 'AbortError') {
      console.error('Share failed:', error)
    }
  }
}

// A4 dimensions in millimeters
const A4_WIDTH_MM = 210
const HTML2CANVAS_SCALE = 2

async function exportPdf(): Promise<void> {
  const el = pageRef.value?.querySelector<HTMLElement>('.main-page-inner')
  if (!el) return

  isExporting.value = true
  await nextTick()

  try {
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ])

    const elRect = el.getBoundingClientRect()

    // Capture the full resume as a high-res canvas
    const canvas = await html2canvas(el, {
      scale: HTML2CANVAS_SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      ignoreElements: (element: Element) => element.classList.contains('action-buttons'),
    })

    const imgData = canvas.toDataURL('image/png')

    // Convert pixel dimensions to PDF millimeters
    const pxToMM = A4_WIDTH_MM / canvas.width
    const totalHeightMM = canvas.height * pxToMM

    // Create a single continuous PDF page matching the full content height
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [A4_WIDTH_MM, totalHeightMM],
    })

    pdf.addImage(imgData, 'PNG', 0, 0, A4_WIDTH_MM, totalHeightMM)

    // Add interactive clickable links
    const domPxToMM = A4_WIDTH_MM / elRect.width
    const linkElements = Array.from(el.querySelectorAll<HTMLAnchorElement>('a[href]'))

    for (const a of linkElements) {
      const href = a.href
      if (!href || href.startsWith('javascript:')) continue

      const clientRects = Array.from(a.getClientRects())
      for (const r of clientRects) {
        if (r.width === 0 || r.height === 0) continue
        pdf.link(
          (r.left - elRect.left) * domPxToMM,
          (r.top - elRect.top) * domPxToMM,
          r.width * domPxToMM,
          r.height * domPxToMM,
          { url: href },
        )
      }
    }

    pdf.save('CV_FedorVlasenko.pdf')
  } catch (error) {
    console.error('PDF export failed:', error)
  } finally {
    isExporting.value = false
  }
}

</script>

<style>
/* Theme: Apple Premium  ← change to style.css to revert */
@import './assets/css/style-apple.css';

.action-buttons {
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  z-index: 10;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-bg, #f5f5f7);
  border: 1px solid var(--color-border, #d2d2d7);
  color: #111111;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-btn:hover {
  background: #ffffff;
  color: var(--color-accent, #0071e3);
  border-color: var(--color-accent, #0071e3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.action-btn:active {
  transform: scale(0.95);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* ─── Mobile specific: vertical stack in top right corner ─── */
@media (max-width: 768px) {
  .action-buttons {
    top: 16px;
    right: 16px;
    flex-direction: column;
    gap: 8px;
  }

  .action-btn {
    width: 36px;
    height: 36px;
    font-size: 15px;
  }
}
</style>
