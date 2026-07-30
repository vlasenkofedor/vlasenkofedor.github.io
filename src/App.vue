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
          <i class="fas fa-file-arrow-down" />
        </button>

        <button
          v-if="isShareAvailable"
          class="action-btn"
          title="Share resume"
          aria-label="Share resume"
          @click="shareResume"
        >
          <i class="fas fa-share-nodes" />
        </button>
      </div>

      <Intro
        :intro-info="data.introInfo"
        :contact-info="data.contactInfo"
        :social-media-info="data.socialMediaInfo"
      />

      <div class="p-5">
        <div class="row">
          <div class="col-lg-8">
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
import { ref, computed, onMounted } from 'vue'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import Intro from '@/components/Intro.vue'
import Summary from '@/components/Summary.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Language from '@/components/Language.vue'
import Interest from '@/components/Interest.vue'
import Example from '@/components/Example.vue'
import Volunteer from '@/components/Volunteer.vue'
import Skill from '@/components/Skill.vue'

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
const A4_HEIGHT_MM = 297
const HTML2CANVAS_SCALE = 2
/** Top padding added on pages 2, 3, … so content doesn't start at the very edge */
const PAGE_TOP_MARGIN_MM = 15

async function exportPdf(): Promise<void> {
  const el = pageRef.value?.querySelector<HTMLElement>('.main-page-inner')
  if (!el) return

  isExporting.value = true

  try {
    // 1. Measure ALL potential break points in the live DOM before canvas render:
    //    - <section> boundaries (Summary, Experience, Education, …)
    //    - <li.timeline-item> boundaries (individual experience / education entries)
    const elRect = el.getBoundingClientRect()
    const breakElements = Array.from(
      el.querySelectorAll<HTMLElement>('section, li.timeline-item'),
    )
    const breakTopsPx = breakElements.map(
      node => node.getBoundingClientRect().top - elRect.top,
    )

    // 2. Capture the full resume as a high-res canvas
    const canvas = await html2canvas(el, {
      scale: HTML2CANVAS_SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/png')

    // 3. Convert pixel positions → PDF millimeters
    const pxToMM = A4_WIDTH_MM / canvas.width
    const totalHeightMM = canvas.height * pxToMM
    const breaksMM = breakTopsPx.map(px => px * HTML2CANVAS_SCALE * pxToMM)

    // 4. Find optimal page break positions.
    //    Page 1 uses the full A4 height.
    //    Pages 2+ reserve PAGE_TOP_MARGIN_MM at the top → less content per page.
    const pageStartsMM: number[] = [0]
    let currentStart = 0
    let isFirstPage = true

    while (currentStart < totalHeightMM) {
      const usableHeight = isFirstPage
        ? A4_HEIGHT_MM
        : A4_HEIGHT_MM - PAGE_TOP_MARGIN_MM

      const pageContentEnd = currentStart + usableHeight
      if (pageContentEnd >= totalHeightMM) break

      // Last break point that still fits within this page's usable area
      const fittingBreaks = breaksMM.filter(b => b > currentStart && b <= pageContentEnd)
      const nextStart = fittingBreaks.length > 0
        ? fittingBreaks[fittingBreaks.length - 1]
        : pageContentEnd // fallback: mechanical cut

      pageStartsMM.push(nextStart)
      currentStart = nextStart
      isFirstPage = false
    }

    // 5. Render each A4 page with clean masks at top/bottom
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

    for (let i = 0; i < pageStartsMM.length; i++) {
      if (i > 0) pdf.addPage()

      const pageStart = pageStartsMM[i]
      const topMargin = i > 0 ? PAGE_TOP_MARGIN_MM : 0

      // Place full image: content at pageStart aligns to y=topMargin in the PDF
      pdf.addImage(imgData, 'PNG', 0, topMargin - pageStart, A4_WIDTH_MM, totalHeightMM)

      // ── White mask: covers any content bleed from the PREVIOUS page ──
      pdf.setFillColor(255, 255, 255)
      if (topMargin > 0) {
        pdf.rect(0, 0, A4_WIDTH_MM, topMargin, 'F')
      }

      // ── White mask: covers any content bleed into the NEXT page ──
      const pageEnd = pageStartsMM[i + 1] ?? totalHeightMM
      const contentBottomInPDF = topMargin + (pageEnd - pageStart)
      if (contentBottomInPDF < A4_HEIGHT_MM) {
        pdf.rect(0, contentBottomInPDF, A4_WIDTH_MM, A4_HEIGHT_MM - contentBottomInPDF, 'F')
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-bg, #f5f5f7);
  border: 1px solid var(--color-border, #d2d2d7);
  color: var(--color-primary, #1d1d1f);
  font-size: 17px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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
