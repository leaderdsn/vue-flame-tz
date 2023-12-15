import { IPeople } from '@/types/types'
import type { ActionContext } from 'vuex'
import { Nullable } from '@/types/types'
import { IRootStore } from '@/store/interfaces'

export interface IFavoritesStore {
  state: IFavoritesState
  getters: IFavoritesGetters
  mutations: IFavoritesMutations
  actions: IFavoritesActions
}

export interface IFavoritesState {
  favorites: Nullable<IPeople[]>
}

export interface IFavoritesGetters {
  getFavorites: (state: IFavoritesState) => void
}

export interface IFavoritesMutations {
  setFavorites: (state: IFavoritesState, peoples: IPeople[]) => void
  removeFavorites: (state: IFavoritesState) => void
}

export interface IFavoritesActions {
  getFavoritesData: ({ commit }: ActionContext<IFavoritesState, IRootStore>) => void
}