import React, { ForwardedRef } from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
import { forwardRef } from 'react'
import { CategoriesType } from '../../interfaces'

interface Props {
	categories: CategoriesType[]
	setSelectedCategory: (category: CategoriesType | null) => void
	selectedCategory: CategoriesType | null
}

const Category = forwardRef(({ categories, setSelectedCategory, selectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div ref={ref} className={styles.category}>
			<button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? styles.active : styles.item}>
				All
			</button>
			{categories.map(category => {
				return (
					<button
						onClick={() => {
							setSelectedCategory(category)
						}}
						className={selectedCategory === category ? styles.active : styles.item}
						key={category}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
})
Category.displayName = 'Category'

export default Category
