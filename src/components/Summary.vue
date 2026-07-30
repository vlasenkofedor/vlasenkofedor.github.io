<template>
  <section class="mb-5">
    <h3 class="section-title">Summary</h3>
    <span>{{ summaryInfo }}</span>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  summaryInfo: string
}>()
</script>
