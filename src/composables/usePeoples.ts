import Peoples from '@/api/services/Peoples'
import { IPeople } from '@/types/types'

const usePeoples = () => {
	
	const changeData = (data: IPeople[]) => {
		const urlReplace = 'https://swapi.dev/api'
		return data.map((item: IPeople) => {
			return {
				...item,
				url: item.url!.replace(urlReplace, '')
			}
		})
	}

	const getData = async () => {
		try {
			const { data } = await Peoples.getPeoples()
			return changeData(data.results)
		} 
		catch (err) {
			console.log(err)
		}
	}

	const getPeople = async (id: string) => {
		try {
			const { data } = await Peoples.getPeople(id)
			return data
		} 
		catch (err) {
			console.log(err)
		}
	}

	const getSearchData = async (params: { search: string }) => {
		try {
			const { data } = await Peoples.getPeoples(params)
			return changeData(data.results)
		} 
		catch (err) {
			console.log(err)
		}
	}

	return {
		getData,
		getSearchData,
		getPeople,
	}
}

export default usePeoples