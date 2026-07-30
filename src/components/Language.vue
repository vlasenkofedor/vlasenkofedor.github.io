<template>
  <section class="mb-5">
    <h3 class="section-title-small" style="margin-left: 10px;">Language</h3>
    <ul class="right-list">
      <li v-for="(lang, index) in languageInfo" :key="index" class="right-list-item">
        <span>{{ lang.name }}</span>
        <small style="color: #6c757d;"> ({{ lang.level }})</small>
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
