<template>
  <section class="mb-5">
    <h5 class="section-title-small">Volunteer Experience</h5>
    <ul class="right-list">
      <li v-for="(vol, index) in volunteerInfo" :key="index">
        <span style="margin-bottom: 0; font-size: 15px;">{{ vol.title }} | </span>
        <span style="font-size: 13px; font-style: italic;">{{ vol.duration }} </span>
        <span style="margin-bottom: 0; color: #6c757d; font-size: 13px;">
          (<a
            class="text-link"
            :href="vol.profileLink"
            :title="`Profile link ${vol.title}`"
            target="_blank"
            rel="noopener noreferrer"
          >my profile</a>)
        </span>
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
