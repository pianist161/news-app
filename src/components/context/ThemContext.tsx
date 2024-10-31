import { createContext, ReactNode, useContext, useState } from 'react'

interface IThemContext {
	isDark: boolean
	toggleTheme: () => void
}

export const ThemContext = createContext<IThemContext | undefined>(undefined)

export const useTheme = () => {
	const context = useContext(ThemContext)
	if (!context) {
		throw new Error('context')
	}
	return context
}
interface ThemeProviderProps {
	children: ReactNode
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = () => {
		setIsDark(prev => !prev)
	}
	return <ThemContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemContext.Provider>
}
