import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import { useFetch } from '../../helpers/hooks/useFetch.js'
import Pagination from '../../components/Pagination/Pagination'
import Category from '../../components/Category/Category'
import Search from '../../components/Search/Search'
import { useDebounce } from '../../helpers/hooks/useDebounce.js'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { useFilters } from '../../helpers/hooks/useFilters.js'

const Main = () => {
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
	const { data: dataCategories } = useFetch(getCategories)

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
		<main className={styles.main}>
			{dataCategories ? (
				<Category
					categories={dataCategories.categories}
					setSelectedCategory={category => changeFilter('category', category)}
					selectedCategory={filters.category}
				/>
			) : null}
			<Search keyWords={filters.keywords} setKeyWords={keywords => changeFilter('keywords', keywords)} />

			{<NewsBanner isLoading={isLoading} item={data && data.news[0]} />}

			<Pagination
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>

			{<NewsList isLoading={isLoading} news={data?.news} />}

			<Pagination
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
		</main>
	)
}

export default Main
