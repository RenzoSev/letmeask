import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { PageAuth, MainContent, Separator, ButtonCreateRoom } from '../styles/auth';
import Button from '../components/Button';

export function Home() {
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
          <ButtonCreateRoom>
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
