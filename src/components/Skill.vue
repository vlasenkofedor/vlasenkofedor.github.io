<template>
  <section class="mb-5">
    <h3 class="section-title">Skills</h3>
    <div class="skills-wrapper">
      <div class="mb-3">
        <b>Technical</b>
        <ul class="right-list mt-1">
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
      </div>

      <div class="mb-3">
        <b>Others</b>
        <ul class="tech-list mt-1">
          <li
            v-for="(skill, index) in otherSkillInfo"
            :key="index"
            style="display: inline-block; margin-right: 0.5rem;"
          >
            {{ skill }}
          </li>
        </ul>
      </div>

      <div>
        <b>Professional</b>
        <ul class="tech-list mt-1">
          <li v-for="(skill, index) in proSkillInfo" :key="index" style="margin-right: 0.5rem;">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
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
