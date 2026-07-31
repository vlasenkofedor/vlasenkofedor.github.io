<template>
  <section class="mb-5">
    <h3 class="section-title">Code examples</h3>
    <ul class="right-list">
      <li v-for="(ex, index) in examples" :key="index" class="right-list-item">
        <a class="text-link" :href="ex.link" target="_blank" rel="noopener noreferrer">
          {{ ex.title }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ExampleItem } from '@/types/resume'

defineProps<{
  examples: ExampleItem[]
}>()
</script>
