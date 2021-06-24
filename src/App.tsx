import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';
import AdminRoom from './pages/AdminRoom';
import NewRoom from './pages/NewRoom';

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
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="/" component={Home} exact />
        </Switch>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
