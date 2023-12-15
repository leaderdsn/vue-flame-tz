<template>
  <div class="peoples">  
		<TheSpin v-if="isLoading" />
		<TheTable v-else :titles="TITLES" :data="peoples" >
			<template #default="{ item }">
				<template v-if="item">
					<router-link class="link" :to="{ path: `${ item.url }` }">{{ item.name }}</router-link>
					<span>{{ item.height }}</span>
					<span>{{ item.mass }}</span>
					<span>{{ item.hair_color}}</span>
				</template>
			</template>
			<template #actions="{ item }" >
				<TheButton 
					v-if="!isItemInFavorites(item)" 
					type="primary"
					@click="onClickAddFavorite(item)"
				>
					Add
				</TheButton>
        <TheButton v-else @click="onClickRemoveFavorite(item)">Remove</TheButton>
			</template>
		</TheTable>
	</div>
</template>

<script setup lang="ts">
import { ComputedRef, computed, onMounted } from 'vue'
import TheTable from '@/components/TheTable.vue'
import TheSpin from '@/components/TheSpin.vue'
import TheButton from '@/components/TheButton.vue'
import useFavorites from '@/views/favorites/hooks/useFavorites'
import { IPeople } from '@/types/types'

const { store, setFavorite, removeFavorite, isItemInFavorites } = useFavorites()

const peoples: ComputedRef<IPeople[]> = computed(() => store.getters.getPeoples)
const isLoading = computed(() => store.getters.getLoading)

const onClickAddFavorite = (item: IPeople) => setFavorite(item)

const onClickRemoveFavorite = (item: IPeople) => removeFavorite(item)

const TITLES = [
	'Name',
	'Height',
	'Mass',
	'Hair Color',
	'Add/Remove',
]

onMounted(async () => {
	await store.dispatch('getPeoplesData')
})
</script>

<style lang="sass" scoped>
.peoples
  height: 100%

</style>