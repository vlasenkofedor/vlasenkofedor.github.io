<template>
  <section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Skills</h3>
    <ul class="right-list">
      <li>
        <b>Technical</b>
        <ul class="right-list">
          <li v-for="(skill, index) in skillInfo" :key="index" class="right-list-item mb-2">
            <span>{{ skill.name }}</span>
            <div class="progress skill-progress" style="background-color: #c0c0c0;">
              <div
                class="progress-bar"
                role="progressbar"
                :style="`width: ${skill.rate}%`"
                :aria-valuenow="skill.rate"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </li>
        </ul>
      </li>

      <li class="mb-2">
        <b>Others</b>
        <ul class="tech-list">
          <li
            v-for="(skill, index) in otherSkillInfo"
            :key="index"
            style="display: inline-block; margin-right: 0.5rem;"
          >
            {{ skill }}
          </li>
        </ul>
      </li>

      <li>
        <b>Professional</b>
        <ul class="tech-list">
          <li v-for="(skill, index) in proSkillInfo" :key="index" style="margin-right: 0.5rem;">
            {{ skill }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { SkillItem } from '@/types/resume'

defineProps<{
  skillInfo: SkillItem[]
  otherSkillInfo: string[]
  proSkillInfo: string[]
}>()
</script>
