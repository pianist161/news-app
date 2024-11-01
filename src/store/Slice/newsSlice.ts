import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PAGE_SIZE } from '../../constants/constants'
import { IFilters, INews } from '../../interfaces/index'

interface State {
	news: INews[]
	filters: IFilters
}

const initialState: State = {
	news: [],
	filters: {
		page_number: 0,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	},
}

export const newsSlice = createSlice({
	name: 'news',

	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<INews[]>) => {
			state.news = action.payload
		},
		setFilers: (state, action: PayloadAction<{ key: string; value: string | null | number }>) => {
			const { key, value } = action.payload
			state.filters = { ...state.filters, [key]: value }
		},
	},
})

export const { setNews, setFilers } = newsSlice.actions

export default newsSlice.reducer
