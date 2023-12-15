import axios from 'axios'

const defaultConfig = {
	baseURL: import.meta.env.VITE_APP_API_URL,
}
export const api = axios.create(defaultConfig)
