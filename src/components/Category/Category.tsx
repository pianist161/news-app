import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
import { forwardRef } from 'react'
const Category = forwardRef(({ categories, setSelectedCategory, selectedCategory }, ref) => {
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
