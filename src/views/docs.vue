<script setup>
import { ref } from 'vue'
const source = ref("# 324")
</script>
<template>
<vue-markdown :source="source" />
</template>

<style scoped>
</style>
