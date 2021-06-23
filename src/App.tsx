import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle from './styles/global'

export function App() {
  const theme = light;
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AuthContextProvider>
        <Switch>
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/" component={Home} />
        </Switch>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
