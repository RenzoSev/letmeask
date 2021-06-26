import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import usePersistedState from './hooks/usePersistedToState';

import Home from './pages/Home';
import Room from './pages/Room';
import AdminRoom from './pages/AdminRoom';
import NewRoom from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext';

import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import ButtonChangeTheme from './styles/app';

export default function App() {
  const [theme, setTheme] = usePersistedState('light', light);
  const changeTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ButtonChangeTheme type="button" onClick={changeTheme}>
        {theme.title === 'light' ? <RiSunFill /> : <RiMoonFill />}
      </ButtonChangeTheme>

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
