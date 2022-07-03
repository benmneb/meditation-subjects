import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { useTheme } from './assets'
import {
	Hero,
	TopBar,
	AboutDrawer,
	FiltersDrawer,
	List,
	Footer,
	SubjectDrawer,
	FootnoteDialog,
} from './components'

export default function App() {
	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Hero />
			<TopBar />
			<AboutDrawer />
			<FiltersDrawer />
			<List />
			<Footer />
			<SubjectDrawer />
			<FootnoteDialog />
		</ThemeProvider>
	)
}
