import { IPeopleState, IPeopleGetters, IPeopleMutations, IPeopleActions } from './peoples/interfaces'
import { IFavoritesState, IFavoritesGetters, IFavoritesMutations } from './favorites/interfaces'

export interface IRootStore {
  state: IPeopleState | IFavoritesState
  getters: IPeopleGetters | IFavoritesGetters
  mutations: IPeopleMutations | IFavoritesMutations
  actions: IPeopleActions
}
