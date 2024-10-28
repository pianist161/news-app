import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<Main />
			</div>
		</>
	)
}

export default App
