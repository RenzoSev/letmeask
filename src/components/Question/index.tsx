import { ReactNode } from 'react';
import cx from 'classnames';

import { DivQuestion, DivUserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export default function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <DivQuestion
      className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered}
      )}
    >
      <p>{content}</p>

      <footer>
        <DivUserInfo isHighlighted={isHighlighted}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </DivUserInfo>

        <div>{children}</div>
      </footer>
    </DivQuestion>
  );
}
