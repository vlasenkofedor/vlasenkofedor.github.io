<template>
  <section class="mb-5">
    <h3 class="section-title">Summary</h3>
    <p class="mb-0">{{ summaryInfo }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  summaryInfo: string
}>()
</script>
