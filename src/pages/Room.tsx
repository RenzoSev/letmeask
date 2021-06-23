import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../services/firebase';

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
import { useAuth } from '../hooks/useAuth';

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');

  const roomId = params.id;

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
  }

  return (
    <PageRoom>
      <header>
        <DivContent>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </DivContent>
      </header>

      <MainContent>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={({ target }) => {
              setNewQuestion(target.value);
            }}
            value={newQuestion}
          />

          <FormFooter>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </FormFooter>
        </form>
      </MainContent>
    </PageRoom>
  );
}