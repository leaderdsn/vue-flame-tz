import { IPeople } from '@/types/types'
import type { ActionContext } from 'vuex'
import { Nullable } from '@/types/types'
import { IRootStore } from '@/store/interfaces'

export interface IPeopleStore {
  state: IPeopleState
  getters: IPeopleGetters
  mutations: IPeopleMutations
  actions: IPeopleActions
}

export interface IPeopleState {
  peoples: Nullable<IPeople[]>
  isLoading: boolean
  error: Nullable<string>
}

export interface IPeopleGetters {
  getPeoples: (state: IPeopleState) => Nullable<IPeople[]>
  getLoading: (state: IPeopleState) => boolean
  getError: (state: IPeopleState) => Nullable<string>
}

export interface IPeopleMutations {
  setPeoples: (state: IPeopleState, peoples: IPeople[]) => void
  setLoading: (state: IPeopleState, loading: boolean) => void
  removePeoples: (state: IPeopleState) => void
  setError: (state: IPeopleState, error: Nullable<string>) => void
}

export interface IPeopleActions {
  getPeoplesData: ({ commit }: ActionContext<IPeopleState, IRootStore>) => void
}