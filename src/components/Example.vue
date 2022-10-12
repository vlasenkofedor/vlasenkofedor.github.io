<template>
<section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Code examples</h3>
    <ul class="right-list">
        <li class="right-list-item" v-for="(ex,index) in examples" :key="index">
          <a class="text-link" :href="ex.link" target="_blank">{{ex.title}}</a>
        </li>
    </ul>
</section>
</template>

<script>
export default {
props: {
        examples: {
            type: Object
        },
    },
}
</script>

<style>

</style>
