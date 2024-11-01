import styles from './styles.module.css'

import NewsList from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'

import NewsFilters from '../NewsFilters/NewsFilters'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'

import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'

import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppDispatch, useAppSelector } from '../../store'
import { setFilers } from '../../store/Slice/newsSlice'

const NewsByFilters = () => {
	// const { filters, changeFilter } = useFilters({
	// 	page_number: 0,
	// 	page_size: PAGE_SIZE,
	// 	category: null,
	// 	keywords: '',
	// })
	const dispatch = useAppDispatch()
	const filters = useAppSelector(state => state.news.filters)

	const news = useAppSelector(state => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)
	const { isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords })

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(setFilers({ key: 'page_number', value: filters.page_number + 1 }))
		}
	}
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(setFilers({ key: 'page_number', value: filters.page_number - 1 }))
		}
	}
	const handleClick = (pageNumber: number) => {
		dispatch(setFilers({ key: 'page_number', value: pageNumber }))
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />
			<PaginationWrapper
				top
				bottom
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilters
