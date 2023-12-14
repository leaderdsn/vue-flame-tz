<template>
  <nav class="header">
    <router-link v-for="item in options?.routes" :to="item.path" :key="item.name">{{ item.name }}</router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { options } = useRouter()
</script>
