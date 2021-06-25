import React from 'react';

import ButtonRoomCode from './styles';
import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;
};

export default function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>
        Sala #
        {code}
      </span>
    </ButtonRoomCode>
  );
}
