import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

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

import heroImg from './assets/hero.jpg'

export default function App() {
	const theme = useTheme()

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Hero imageSrc={heroImg} />
				<TopBar />
				<AboutDrawer />
				<FiltersDrawer />
				<List />
				<Footer />
				<SubjectDrawer />
				<FootnoteDialog />
			</ThemeProvider>
		</StyledEngineProvider>
	)
}
