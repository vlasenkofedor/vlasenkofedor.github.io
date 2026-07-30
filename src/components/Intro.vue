<template>
  <section class="row pt-4 pt-md-5 align-items-center">
    <div class="col-12 col-md-3 px-md-4 text-center mb-3 mb-md-0">
      <div class="profile-pic">
        <img :src="profileImageUrl" :alt="introInfo.name" />
      </div>
    </div>

    <div class="col-12 col-md-9">
      <div class="intro-header-text text-center text-md-start">
        <h1 class="intro-title1">
          <span class="color1 bold">{{ introInfo.name }}</span>
        </h1>
        <h2 class="intro-title2">{{ introInfo.title }}</h2>
      </div>

      <div class="row g-2 g-md-3 justify-content-center justify-content-md-start intro-contacts-row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-5 d-flex justify-content-center justify-content-md-start">
          <ul class="intro-list-contact">
            <li v-for="contact in contactInfo" :key="contact.icon">
              <a class="text-link" :href="contact.link" target="_blank" rel="noopener noreferrer">
                <i :class="`${contact.icon}`" :style="contact.style" />
                <span>{{ contact.context }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center justify-content-md-start">
          <ul class="intro-list-social">
            <li v-for="social in socialMediaInfo" :key="social.icon">
              <a class="text-link" :href="social.link" target="_blank" rel="noopener noreferrer">
                <i :class="`${social.icon}`" style="font-size: 21px; width: 26px; display: inline-block; text-align: center; margin-right: 8px;" />
                <span>{{ social.displayName }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IntroInfo, ContactItem, SocialMediaItem } from '@/types/resume'

const props = defineProps<{
  introInfo: IntroInfo
  contactInfo: ContactItem[]
  socialMediaInfo: SocialMediaItem[]
}>()

const profileImageUrl = computed(
  () => new URL(`../assets/images/${props.introInfo.image}`, import.meta.url).href,
)
</script>

<style scoped>
.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  display: block;
}
</style>
