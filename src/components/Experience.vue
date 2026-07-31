<template>
  <section class="mb-5">
    <h3 class="section-title">Work Experience</h3>
    <ul class="timeline">
      <li
        v-for="(exp, index) in experienceInfo"
        :key="index"
        class="timeline-item rounded p-4 shadow"
      >
        <p class="h5 bold">{{ exp.position }}</p>
        <p class="h6">
          <a class="text-link" :href="exp.link" target="_blank" rel="noopener noreferrer">
            {{ exp.workAt }}
          </a>
        </p>
        <span>{{ exp.duration }}</span>
        <p v-if="exp.description" class="mt-2" v-html="exp.description" />
        <div v-if="exp.techs.length > 0">
          <span class="bold">Technologies used:</span>
          <ul class="tech-list pt-2">
            <li v-for="(tech, techIndex) in exp.techs" :key="techIndex" class="tech-list-item">
              <span class="badge bg-secondary badge-pill p-2">{{ tech }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '@/types/resume'

defineProps<{
  experienceInfo: ExperienceItem[]
}>()
</script>
