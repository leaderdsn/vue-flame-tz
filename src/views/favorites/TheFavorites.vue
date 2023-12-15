<template>
  <div class="favorites">
    <TheTable :titles="TITLES" :data="favorites" >
			<template #default="{ item }">
        <router-link class="link" :to="{ path: `${ item.url }` }">{{ item.name }}</router-link>
        <span>{{ item.height }}</span>
        <span>{{ item.mass }}</span>
				<span>{{ item.hair_color}}</span>
			</template>
			<template #actions="{ item }" >
        <TheButton @click="onClickRemoveFavorite(item)">Remove</TheButton>
			</template>
		</TheTable>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TheTable from '@/components/TheTable.vue'
import TheButton from '@/components/TheButton.vue'
import { IPeople } from '@/types/types'
import useFavorites from '@/views/favorites/hooks/useFavorites'

const { store, removeFavorite } = useFavorites()

const TITLES = [
	'Name',
	'Height',
	'Mass',
	'Hair Color',
	'Add/Remove',
]

const favorites = computed(() => store.getters.getFavorites)

const onClickRemoveFavorite = (item: IPeople) => removeFavorite(item)
</script>