import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { useTheme } from './assets';
import {
  Hero,
  TopBar,
  AboutDrawer,
  FiltersDrawer,
  List,
  Footer,
  SubjectDrawer,
  FootnoteDialog,
} from './components';

import heroImg from './assets/hero.jpg';

export default function App() {
  const theme = useTheme();

  return (
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
  );
}
