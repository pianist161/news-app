import styles from './styles.module.css'

import LatestNews from '../../components/LatestNews/LatestNews.js'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.js'
interface Props {
	isDark: boolean
}
const Main = ({ isDark }: Props) => {
	return (
		<main className={styles.main}>
			{<LatestNews />}

			{<NewsByFilters isDark={isDark} />}
		</main>
	)
}

export default Main
