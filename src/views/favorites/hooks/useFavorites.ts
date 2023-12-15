import { computed } from 'vue'
import { useStore } from 'vuex'
import { IPeople } from '@/types/types'

const useFavorites = () => {
	const store = useStore()
	const favorites = computed(() => store.getters.getFavorites)

	const isItemInFavorites = (item: IPeople) => {
		return favorites.value.some((people: IPeople) => people.name === item.name)
	}

	const setFavorite = (item: IPeople) => {
		const newFavorites: IPeople[] = favorites.value.slice()
		if (!isItemInFavorites(item)) {
			newFavorites.push(item)
		}
		store.dispatch('setFavoritesData', newFavorites)
	}

	const removeFavorite = (item: IPeople) => {
		const newFavorites: IPeople[] = favorites.value.slice()
		const index = newFavorites.findIndex(people => people.name === item.name)
	
		if (isItemInFavorites(item)) {
			newFavorites.splice(index, 1)
		}
		store.dispatch('setFavoritesData', newFavorites)
	}

	return {
		store,
		setFavorite,
		removeFavorite,
		favorites,
		isItemInFavorites,
	}
}

export default useFavorites