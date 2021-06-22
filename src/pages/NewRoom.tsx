import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { AuthContext } from '../App';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { PageAuth, MainContent } from '../styles/auth';

function NewRoom() {
  const { user } = useContext(AuthContext)
  
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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </PageAuth>
  );
}

export default NewRoom;
