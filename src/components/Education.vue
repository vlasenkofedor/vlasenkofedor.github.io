<template>
  <section class="mb-5">
    <h3 class="section-title">Education</h3>
    <ul class="timeline">
      <li
        v-for="(education, index) in educationInfo"
        :key="index"
        class="timeline-item rounded p-4 shadow"
      >
        <p class="h6 bold">{{ education.school }}</p>
        <p class="h6">{{ education.title }}</p>
        <span style="font-style: italic;">{{ education.location }}</span><br />
        <span style="font-style: italic;">{{ education.duration }}</span>
        <p v-if="education.description" class="mt-2" v-html="education.description" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EducationItem } from '@/types/resume'

defineProps<{
  educationInfo: EducationItem[]
}>()
</script>
