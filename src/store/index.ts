import { createStore } from 'vuex'
import peoples from '@/store/peoples'
import favorite from '@/store/favorites'
import { IRootStore } from './interfaces'

export default createStore<IRootStore>({
	modules: {
		peoples,
		favorite,
	}
})