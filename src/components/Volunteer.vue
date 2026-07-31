<template>
  <section class="mb-5">
    <h5 class="section-title-small">Volunteer Experience</h5>
    <ul class="right-list">
      <li v-for="(vol, index) in volunteerInfo" :key="index" class="right-list-item">
        <a
          class="text-link"
          :href="vol.profileLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ vol.title }}</span>
        </a>
        <span class="ms-2" style="font-size: 13.5px; color: #555555;">({{ vol.duration }})</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { VolunteerItem } from '@/types/resume'

defineProps<{
  volunteerInfo: VolunteerItem[]
}>()
</script>
