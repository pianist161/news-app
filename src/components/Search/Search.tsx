import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
interface Props {
	keyWords: string
	setKeyWords: (keywords: string) => void
}

const Search = ({ keyWords, setKeyWords }: Props) => {
	return (
		<div className={styles.search}>
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
