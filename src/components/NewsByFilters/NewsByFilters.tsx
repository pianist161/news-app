import styles from './styles.module.css'

import NewsList from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'

import NewsFilters from '../NewsFilters/NewsFilters'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getNews } from '../../api/apiNews'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
const NewsByFilters = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 0,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}
	const handleClick = pageNumber => {
		changeFilter('page_number', pageNumber)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />
			<PaginationWrapper
				top
				bottom
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilters