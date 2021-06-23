import Button from '../components/Button';
import logoImg from '../assets/images/logo.svg';
import {
  PageRoom,
  DivContent,
  MainContent,
  RoomTitle,
  FormFooter,
} from '../styles/room';

export function Room() {
  return (
    <PageRoom>
      <header>
        <DivContent>
          <img src={logoImg} alt="Letmeask" />
          <div>codigo</div>
        </DivContent>
      </header>

      <MainContent>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <FormFooter>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </FormFooter>
        </form>
      </MainContent>
    </PageRoom>
  );
}
