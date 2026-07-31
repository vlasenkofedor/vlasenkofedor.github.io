<template>
  <section class="mb-5">
    <h3 class="section-title">Interest</h3>
    <ul class="right-list">
      <li v-for="(interest, index) in interestInfo" :key="index" class="right-list-item">
        <span>{{ interest.name }}</span>
        <span v-if="interest.description"> | </span>
        <span v-if="interest.link">
          <a
            class="text-link"
            :href="interest.link"
            :title="interest.description"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small style="word-break: break-all;"><i>{{ interest.description }}</i></small>
          </a>
        </span>
        <span v-else>
          <small style="word-break: break-all;"><i>{{ interest.description }}</i></small>
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
