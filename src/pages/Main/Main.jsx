import React, { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await getNews()
				console.log(res)

				setNews(res.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])
	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[3]} /> : null}
			<NewsList news={news} />
		</main>
	)
}

export default Main
