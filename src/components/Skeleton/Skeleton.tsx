import React from 'react'

import styles from './styles.module.css'
import { DirectionType, SkeletonType } from '../../interfaces'

interface Props {
	type?: SkeletonType
	count?: number
	direction?: DirectionType
}

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }: Props) => {
	return (
		<>
			{count > 1 ? (
				<ul className={direction === 'column' ? styles.columnlist : styles.rowList}>
					{[...Array(count)].map((_, index) => (
						<li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
					))}
				</ul>
			) : (
				<li className={type === 'banner' ? styles.banner : styles.item}></li>
			)}
		</>
	)
}

export default Skeleton
