import React from 'react'

import styles from './styles.module.css'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getCategories } from '../../api/apiNews'
import Category from '../Category/Category'
import Search from '../Search/Search'
const NewsFilters = ({ filters, changeFilter }) => {
	const { data: dataCategories } = useFetch(getCategories)
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Category
					categories={dataCategories.categories}
					setSelectedCategory={category => changeFilter('category', category)}
					selectedCategory={filters.category}
				/>
			) : null}
			<Search keyWords={filters.keywords} setKeyWords={keywords => changeFilter('keywords', keywords)} />
		</div>
	)
}

export default NewsFilters
