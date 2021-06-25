import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import Button from '../components/Button';
import RoomCode from '../components/RoomCode';
import Question from '../components/Question';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import {
  PageRoom,
  DivContent,
  MainContent,
  RoomTitle,
  DivQuestionList,
} from '../styles/room';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

type RoomParams = {
  id: string;
};

export default function AdminRoom(): JSX.Element {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <PageRoom>
      <header>
        <DivContent>
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
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
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </DivQuestionList>
      </MainContent>
    </PageRoom>
  );
}
