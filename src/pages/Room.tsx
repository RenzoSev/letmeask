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
  UserInfo,
} from '../styles/room';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

type FireBaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

type RoomParams = {
  id: string;
};

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FireBaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });
  }, [roomId]);

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
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length} {questions.length > 1 ? 'perguntas' : 'pergunta'}
            </span>
          )}
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
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>

        {JSON.stringify(questions)}
      </MainContent>
    </PageRoom>
  );
}
