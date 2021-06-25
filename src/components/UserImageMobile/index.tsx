import useAuth from '../../hooks/useAuth';
import DivUserImabeMobile from './styles';

function UserImageMobile() {
  const { user } = useAuth();

  return (
    <DivUserImabeMobile>
      <img src={user?.avatar} alt="Profile avatar" />
    </DivUserImabeMobile>
  );
}

export default UserImageMobile;
