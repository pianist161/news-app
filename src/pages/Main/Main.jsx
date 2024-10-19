import React, { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'
const Main = () => {
	const [news, setNews] = useState([])
	const [categories, setCategories] = useState([])
	const [selectCategories, setSelectCategories] = useState('All')
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(0)
	const totalPages = 10
	const pageSize = 10
	const fetchNews = async currentPage => {
		try {
			setIsLoading(true)
			const res = await getNews(currentPage, pageSize)
			console.log(res)
			setIsLoading(false)
			setNews(res.news)
		} catch (error) {
			console.log(error)
		}
	}
	const fetchCategories = async () => {
		try {
			const res = await getCategories()
			setCategories(['All', ...res.categories])
			console.log(res.categories)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchCategories()
	}, [])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handleClick = pageNumber => {
		setCurrentPage(pageNumber)
	}
	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])
	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}
			<Pagination
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
			{!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
			<Pagination
				handleNextPage={handleNextPage}
				handleClick={handleClick}
				handlePreviousPage={handlePreviousPage}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</main>
	)
}

export default Main
