import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
import { useTheme } from '../context/ThemContext'
interface Props {
	keyWords: string
	setKeyWords: (keywords: string) => void
}

const Search = ({ keyWords, setKeyWords }: Props) => {
	const { isDark } = useTheme()
	return (
		<div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
			<input
				className={styles.input}
				type='text'
				name=''
				id=''
				value={keyWords}
				onChange={e => setKeyWords(e.target.value)}
				placeholder='Javascript'
			/>
		</div>
	)
}

export default Search
