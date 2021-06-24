import { ReactNode } from 'react';

import { DivQuestion, DivUserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export default function Question({ content, author, children }: QuestionProps) {
  return (
    <DivQuestion className="question">
      <p>{content}</p>

      <footer>
        <DivUserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </DivUserInfo>

        <div>{children}</div>
      </footer>
    </DivQuestion>
  );
}
