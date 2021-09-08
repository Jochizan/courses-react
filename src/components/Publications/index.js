import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/usuarios.actions';
import * as publicationActions from '../../actions/publication.actions';

const Publicaciones = (props) => {
  const {
    match: {
      params: { key }
    },
    getUsers,
    getByUser,
    publicationReducer: { publicaciones },
    userReducer: { usuarios }
  } = props;

  const loadData = async () => {
    if (!usuarios || !usuarios.length) {
      await getUsers();
    }
    await getByUser(key);
  };
  console.log(usuarios, publicaciones);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>Publicaciones de</h1>
      {key}
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
