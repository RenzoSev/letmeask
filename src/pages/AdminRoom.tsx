import { useParams } from 'react-router-dom';

import Button from '../components/Button';
import RoomCode from '../components/RoomCode';
import Question from '../components/Question';

import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.svg';
import {
  PageRoom,
  DivContent,
  MainContent,
  RoomTitle,
  DivQuestionList,
} from '../styles/room';
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
  id: string;
};

export default function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  return (
    <PageRoom>
      <header>
        <DivContent>
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </DivContent>
      </header>

      <MainContent>
        <RoomTitle>
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{' '}
              {questions.length > 1 ? 'perguntas' : 'pergunta'}
            </span>
          )}
        </RoomTitle>

        <DivQuestionList>
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          ))}
        </DivQuestionList>
      </MainContent>
    </PageRoom>
  );
}
