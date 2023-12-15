<template>
  <div class="people">
    <TheSpin v-if="isLoading" />
    <template v-else>
      <h2 class="people__header"> {{ people?.name }}</h2>
      <TheTable :titles="TITLES" :data="people" >
        <span>{{ people?.height }}</span>
        <span>{{ people?.mass }}</span>
        <span>{{ people?.hair_color}}</span>
        <span>{{ people?.gender}}</span>
        <span>{{ people?.eye_color }}</span>
        <span>{{ people?.skin_color }}</span>
        <template #actions>
          <TheButton 
            v-if="!isItemInFavorites(people!)" 
            type="primary"
            @click="onClickAddFavorite(people!)"
          >
            Add
          </TheButton>
          <TheButton v-else @click="onClickRemoveFavorite(people!)">Remove</TheButton>
        </template>
      </TheTable>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheButton from '@/components/TheButton.vue'
import TheSpin from '@/components/TheSpin.vue'
import TheTable from '@/components/TheTable.vue'
import usePeoples from '@/composables/usePeoples'
import useFavorites from '@/views/favorites/hooks/useFavorites'
import { IPeople } from '@/types/types'

const people = ref<IPeople>()
const isLoading = ref<boolean>(true)
const route = useRoute()

const TITLES = [
	'Height',
	'Mass',
	'Hair Color',
	'Gender',
	'Eye Color',
	'Skin Color',
	'Add/Remove',
]

const { setFavorite, removeFavorite, isItemInFavorites } = useFavorites()
const { getPeople } = usePeoples()

const onClickAddFavorite = (item: IPeople) => setFavorite(item)

const onClickRemoveFavorite = (item: IPeople) => removeFavorite(item)

const getPeopleData = async () => {
	isLoading.value = true
	const peopleId = route.params.id

	const data = await getPeople(peopleId as string)
	if (data) {
		people.value = data
	}
	isLoading.value = false
}

watch(route, async() => await getPeopleData())

onMounted(async () => await getPeopleData())
</script>

<style lang="sass" scoped>
.people__header
  color: $color-blue_3
</style>