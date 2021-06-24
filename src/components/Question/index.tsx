import { DivQuestion, DivUserInfo } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export default function Question({ content, author }: QuestionProps) {
  return (
    <DivQuestion className="question">
      <p>{content}</p>

      <footer>
        <DivUserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </DivUserInfo>

        <div></div>
      </footer>
    </DivQuestion>
  );
}
