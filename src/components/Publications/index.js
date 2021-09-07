import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/usuarios.actions';
import * as publicationActions from '../../actions/publication.actions';

const Publicaciones = ({
  match: {
    params: { key }
  },
  usuarios,
  publicaciones,
  getUsers,
  getPublications,
  userReducer,
  publicationReducer
}) => {
  useEffect(() => {
    if (!usuarios || !usuarios.length) {
      getUsers();
    }
  }, []);

  console.log(publicationReducer, userReducer);

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
