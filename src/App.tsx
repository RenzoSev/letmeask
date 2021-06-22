import { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { firebase, auth } from './services/firebase';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle from './styles/global'

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function App() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();    
    const result = await auth.signInWithPopup(provider);
   
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }
  
  const theme = light;
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <AuthContext.Provider value={{user, signInWithGoogle}}>
        <Switch>
          <Route path="/rooms/new" component={NewRoom}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
