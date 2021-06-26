/* eslint-disable react/require-default-props */

import useAuth from '../../hooks/useAuth';
import DivUserImabeMobile from './styles';

type UserImageProps = {
  applyInDesktop?: boolean;
};

function UserImage({ applyInDesktop = false }: UserImageProps) {
  const { user } = useAuth();

  return (
    <DivUserImabeMobile applyInDesktop={applyInDesktop}>
      {user?.avatar && <img src={user.avatar} alt="Profile avatar" />}
    </DivUserImabeMobile>
  );
}

export default UserImage;
