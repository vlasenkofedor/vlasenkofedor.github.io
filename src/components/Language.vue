<template>
  <section class="mb-5">
    <h3 class="section-title-small">Language</h3>
    <ul class="right-list">
      <li v-for="(lang, index) in languageInfo" :key="index" class="right-list-item">
        <span>{{ lang.name }}</span>
        <span class="ms-1" style="font-size: 13.5px; color: #555555;">({{ lang.level }})</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { LanguageItem } from '@/types/resume'

defineProps<{
  languageInfo: LanguageItem[]
}>()
</script>
