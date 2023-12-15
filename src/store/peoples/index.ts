import type { Module } from 'vuex'
import usePeoples from '@/composables/usePeoples'
import { IPeopleState } from './interfaces'
import { IRootStore } from '../interfaces'


const peoples: Module<IPeopleState, IRootStore> = {
	state: {
		peoples: JSON.parse(localStorage.getItem('peoples') as string) || null,
		isLoading: true,
		error: null,
	},

	getters: {
		getPeoples: ({ peoples }) => peoples,
		getLoading: ({ isLoading }) => isLoading,
		getError: ({ error }) => error,
	},

	mutations: {
		setPeoples(state, peoples) {
			state.peoples = peoples
			localStorage.setItem('peoples', JSON.stringify(peoples))
		},
		setLoading(state, loading) {
			state.isLoading = loading
		},
		removePeoples(state) {
			state.peoples = null
			localStorage.removeItem('peoples')
		},
		setError(state, error) {
			state.error = error
		},
	},

	actions: {
		async getPeoplesData({ commit }) {
			commit('setLoading', true)
			await usePeoples().getData().then(data => {
				commit('setPeoples', data)
				commit('setLoading', false)
			})
		},
	}
}

export default peoples