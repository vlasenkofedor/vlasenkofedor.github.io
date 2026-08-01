<template>
  <section class="mb-5">
    <h3 class="section-title-small">Interest</h3>
    <ul class="right-list">
      <li v-for="(interest, index) in interestInfo" :key="index" class="right-list-item">
        <a
          v-if="interest.link"
          class="text-link"
          :href="interest.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ interest.name }}</span>
        </a>
        <span v-else>{{ interest.name }}</span>
        <span v-if="interest.description" class="ms-1" style="font-size: 13.5px; color: #555555;">
          ({{ interest.description }})
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { InterestItem } from '@/types/resume'

defineProps<{
  interestInfo: InterestItem[]
}>()
</script>
