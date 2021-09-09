import { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../General/Loader';

import * as userActions from '../../actions/usuarios.actions';
import * as publicationActions from '../../actions/publication.actions';
import userReducer from 'src/reducers/usuarios.reducers';
import Failed from '../General/Falied';

const Publicaciones = (props) => {
  const {
    match: {
      params: { key }
    },
    getUsers,
    getByUser,
    publicationReducer: { publicaciones },
    userReducer: { usuarios, loading, error }
  } = props;

  const loadData = async () => {
    if (!usuarios.length) {
      return await getUsers();
    }
    if (!('publication_key' in usuarios[key])) {
      await getByUser(key);
    }
  };

  console.log(usuarios, publicaciones);

  const loadUser = () => {
    if (Object.keys(error).length) {
      return <Failed message={error.message} />;
    }

    if (!usuarios.length || loading) {
      return <Loader />;
    }

    const name = usuarios[key]?.name;

    return <h1>Publicaciones de {name}</h1>;
  };

  useEffect(() => {
    loadData();
  }, [usuarios]);

  return (
    <div>
      {loadUser()}
    </div>
  );
};

const mapStateToProps = ({ userReducer, publicationReducer }) => {
  return { userReducer, publicationReducer };
};

const mapDispatchToProps = {
  ...userActions,
  ...publicationActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
