<template>
  <div class="home">
    <router-link class="link" to="/peoples"><h2>Peoples</h2></router-link>
    <router-link class="link" to="favorites"><h2>Favorites</h2></router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.home
  display: grid
  grid-template-columns: max-content
  grid-auto-rows: max-content
  gap: 20px
  align-content: center
  justify-content: center
  height: 100%
</style>