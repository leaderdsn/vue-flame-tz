import { api } from '@/api'
import { Id } from '@/types/types'

const Peoples = {
	getPeoples(params?: { search: string }) {
		const url = 'people/'
		return api.get(url, { params })
	},

	getPeople(id: Id) {
		const url = `people/${id}/`
		return api.get(url)
	},
}

export default Peoples