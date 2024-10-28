import React from 'react'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'
const Search = ({ keyWords, setKeyWords }) => {
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
