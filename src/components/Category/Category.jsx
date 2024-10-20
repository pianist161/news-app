import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
const Category = ({ categories, setSelectedCategory, selectedCategory }) => {
	return (
		<div className={styles.category}>
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
}

export default Category
