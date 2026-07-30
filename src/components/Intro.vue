<template>
  <section class="intro-section px-3 px-md-5 pt-4 pt-md-5">
    <div class="row align-items-center">
      <div class="col-12 col-md-3 intro-profile-col text-center text-md-start mb-3 mb-md-0">
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

        <div class="intro-contacts-wrapper d-flex flex-column flex-sm-row gap-3 gap-md-4 justify-content-center justify-content-md-start align-items-start">
          <ul class="intro-list-contact">
            <li v-for="contact in contactInfo" :key="contact.icon">
              <a class="text-link" :href="contact.link" target="_blank" rel="noopener noreferrer">
                <i :class="`${contact.icon}`" class="contact-icon" />
                <span>{{ contact.context }}</span>
              </a>
            </li>
          </ul>

          <ul class="intro-list-social">
            <li v-for="social in socialMediaInfo" :key="social.icon">
              <a class="text-link" :href="social.link" target="_blank" rel="noopener noreferrer">
                <i :class="`${social.icon}`" class="contact-icon" />
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

.contact-icon {
  font-size: 20px;
  width: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: var(--color-primary);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .intro-profile-col {
    padding-left: 10px !important;
  }

  .profile-pic {
    margin-left: 0;
  }
}
</style>
