import { useParams } from 'react-router-dom';

import Button from '../components/Button';
import RoomCode from '../components/RoomCode';
import logoImg from '../assets/images/logo.svg';
import {
  PageRoom,
  DivContent,
  MainContent,
  RoomTitle,
  FormFooter,
} from '../styles/room';

type RoomParams = {
  id: string;
}

export function Room() {
  const params = useParams<RoomParams>();
  
  return (
    <PageRoom>
      <header>
        <DivContent>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
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
