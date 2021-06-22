
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import {AuthContext} from '../App';

import { PageAuth, MainContent, Separator, ButtonCreateRoom } from '../styles/auth';

import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import logoImg from '../assets/images/logo.svg';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {
   if (!user) await signInWithGoogle();
   
   history.push('/rooms/new');
  }
  
  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <ButtonCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <form>
            <input 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </PageAuth>
  )
}

export default Home;
