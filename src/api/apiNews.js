import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const getNews = async ({ page_number = 0, page_size = 10, category }) => {
	try {
		const res = await axios.get(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category,
			},
		})
		return res.data
	} catch (error) {
		console.log(error)
	}
}
export const getCategories = async () => {
	try {
		const res = await axios.get(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			},
		})
		return res.data
	} catch (error) {
		console.log(error)
	}
}
