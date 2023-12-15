<template>
  <main class="main">
    <TheHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </main>

</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="sass" scoped>
.main
  width: 100%
  margin-top: 70px
  height: calc(100vh - 80px)

.container
  width: 100%
  height: 100%
  margin: 0 auto
</style>