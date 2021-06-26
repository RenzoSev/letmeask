import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

function useAuth(): AuthContextType {
  const value = useContext(AuthContext);

  return value;
}

export default useAuth;
