import './App.css'
import { useTheme } from './components/context/ThemContext'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

function App() {
	const { isDark } = useTheme()
	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header />
			<div className='container'>
				<Main />
			</div>
		</div>
	)
}

export default App
