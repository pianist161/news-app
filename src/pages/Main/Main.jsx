import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews'

import { useFetch } from '../../helpers/hooks/useFetch.js'

import { useDebounce } from '../../helpers/hooks/useDebounce.js'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { useFilters } from '../../helpers/hooks/useFilters.js'
import LatestNews from '../../components/LatestNews/LatestNews.jsx'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx'

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

	return (
		<main className={styles.main}>
			{<LatestNews isLoading={isLoading} banners={data && data?.news} />}

			{<NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilter={changeFilter} />}
		</main>
	)
}

export default Main
