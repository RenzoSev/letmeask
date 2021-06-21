import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyle from './styles/global'

function App() {
  const theme = light
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
