import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { StateProvider } from './state';
import { useTheme } from './assets';
import { Hero, TopBar, AboutDrawer, List, Footer } from './components';

export default function App() {
	const theme = useTheme();

	return (
		<StateProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Hero imageSrc="https://source.unsplash.com/random/1920x1080" />
				<TopBar />
				<AboutDrawer />
				<List />
				<Footer />
			</ThemeProvider>
		</StateProvider>
	);
}