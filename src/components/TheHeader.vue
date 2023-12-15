<template>
  <header class="header">
    <router-link  
      class="link" 
      v-for="item in items" 
      :to="item.path" 
      :key="item.name"
    >
      {{ item.name }}
    </router-link>
    <TheSearch />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouteRecordName, useRouter } from 'vue-router'
import TheSearch from '@/components/TheSearch.vue'

export interface IHeaderItem {
  name?: RouteRecordName
  path: string
}

const router = useRouter()
const items = ref<IHeaderItem[]>([])

router.options?.routes.forEach((route) => {
	if (route.meta?.menu === true) {
		items.value.push({
			...route,
			name: route.name,
			path: route.path,
		})
	}
})

</script>

<style lang="sass" scoped>
.header
  display: grid
  grid-auto-flow: column
  grid-auto-columns: max-content
  align-items: center
  gap: 20px
  padding: 10px
  box-sizing: border-box
  width: 100%
  height: 60px
  position: absolute
  top: 0
  left: 0
  background-color: $color-blue_3
</style>