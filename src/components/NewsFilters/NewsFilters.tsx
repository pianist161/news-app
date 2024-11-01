import React from 'react'

import styles from './styles.module.css'

import { getCategories } from '../../api/apiNews'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import { CategoriesApiResponse, IFilters } from '../../interfaces'
import { useTheme } from '../context/ThemContext'
import { useGetCategoriesAllQuery } from '../../store/services/newsApi'
import { useAppDispatch } from '../../store'
import { setFilers } from '../../store/Slice/newsSlice'
interface Props {
	filters: IFilters
}

const NewsFilters = ({ filters }: Props) => {
	const { isDark } = useTheme()
	const { data } = useGetCategoriesAllQuery(null)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Category
						categories={data.categories}
						setSelectedCategory={category => dispatch(setFilers({ key: 'category', value: category }))}
						selectedCategory={filters.category}
					/>
				</Slider>
			) : null}
			<Search keyWords={filters.keywords} setKeyWords={keywords => dispatch(setFilers({ key: 'keywords', value: keywords }))} />
		</div>
	)
}

export default NewsFilters
