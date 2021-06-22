import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyle from './styles/global'

function App() {
  const theme = light
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <Switch>
        <Route path="/rooms/new" component={NewRoom}/>
        <Route path="/" component={Home}/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
