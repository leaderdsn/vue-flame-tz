import type { Module } from 'vuex'
import { IFavoritesState } from './interfaces'
import { IRootStore } from '../interfaces'


const favorites: Module<IFavoritesState, IRootStore> = {
	state: {
		favorites: JSON.parse(localStorage.getItem('favorites') as string) || [],
	},

	getters: {
		getFavorites: ({ favorites }) => favorites,
	},

	mutations: {
		setFavorites(state, favorites) {
			state.favorites = favorites
			localStorage.setItem('favorites', JSON.stringify(favorites))
		},
		removeFavorites(state) {
			state.favorites = []
			localStorage.removeItem('favorites')
		},
	},
	actions: {
		setFavoritesData({ commit }, payload) {
			commit('setFavorites', payload)
		},
	}
}

export default favorites