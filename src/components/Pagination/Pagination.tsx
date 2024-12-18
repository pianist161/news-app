import { IPaginationProps } from '../../interfaces'
import { useTheme } from '../context/ThemContext'
import styles from './styles.module.css'

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handleClick, currentPage }: IPaginationProps) => {
	const { isDark } = useTheme()
	return (
		<div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
			<button className={styles.arrow} onClick={() => handlePreviousPage()} disabled={currentPage <= 1}>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button key={index} className={styles.pageNumber} onClick={() => handleClick(index)} disabled={index === currentPage}>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button className={styles.arrow} onClick={() => handleNextPage()} disabled={currentPage >= 1}>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination
