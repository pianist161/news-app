import styles from './styles.module.css'

import LatestNews from '../../components/LatestNews/LatestNews.js'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.js'

const Main = () => {
	return (
		<main className={styles.main}>
			{<LatestNews />}

			{<NewsByFilters />}
		</main>
	)
}

export default Main
