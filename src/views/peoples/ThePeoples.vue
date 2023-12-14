<template>
  <div class="peoples">Люди</div>
  <router-link :to="{ path: '/peoples/1' }">1</router-link>
  <router-link :to="{ path: '/peoples/2' }">2</router-link>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>