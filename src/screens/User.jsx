import { useParams } from 'react-router-dom';

const User = () => {
  let { username } = useParams();

  return (
    <div>
      <h3>Perfil de usuario</h3>
      <p>
        Nombre de usuario <b>{username}</b>
      </p>
    </div>
  );
};

export default User;
