import React, { useState, useEffect } from 'react';

import ButtonRoomCode from './styles';
import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;
};

export default function RoomCode({ code }: RoomCodeProps) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  const [hasBeenToggled, setHasBeenToggled] = useState(false);

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    setHasBeenCopied(!hasBeenCopied);
    setHasBeenToggled(!hasBeenToggled);
  }

  useEffect(() => {
    if (hasBeenToggled && hasBeenCopied) {
      setTimeout(() => {
        setHasBeenCopied(!hasBeenCopied);
        setHasBeenToggled(!hasBeenToggled);
      }, 3000);
    }
  }, [hasBeenCopied]);

  return (
    <ButtonRoomCode onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>
        {
        hasBeenCopied
          ? 'Código copiado!'
          : `Sala #${code}`
        }
      </span>
    </ButtonRoomCode>
  );
}
