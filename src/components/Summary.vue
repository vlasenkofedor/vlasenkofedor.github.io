<template>
  <section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Summary</h3>
    <p class="mb-0" style="margin-left: 10px;">{{ summaryInfo }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  summaryInfo: string
}>()
</script>
