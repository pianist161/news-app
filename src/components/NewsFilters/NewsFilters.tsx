import React from 'react'

import styles from './styles.module.css'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getCategories } from '../../api/apiNews'
import Category from '../Category/Category'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
const NewsFilters = ({ filters, changeFilter }) => {
	const { data: dataCategories } = useFetch(getCategories)
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider>
					<Category
						categories={dataCategories.categories}
						setSelectedCategory={category => changeFilter('category', category)}
						selectedCategory={filters.category}
					/>
				</Slider>
			) : null}
			<Search keyWords={filters.keywords} setKeyWords={keywords => changeFilter('keywords', keywords)} />
		</div>
	)
}

export default NewsFilters
