import { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../General/Loader';
import Failed from '../General/Falied';
import Comments from './Comments';

import * as userActions from '../../actions/usuarios.actions';
import * as publicationActions from '../../actions/publication.actions';

const Publicaciones = (props) => {
  const {
    match: {
      params: { key }
    },
    getUsers,
    getByUser,
    getComments,
    openAndClose,
    publicationReducer: { publicaciones, loading: pLoading, error: pError },
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

  const loadPublications = () => {
    if (Object.keys(pError).length) {
      return <Failed message={pError.message} />;
    }

    if (pLoading || !publicaciones.length) {
      return <Loader />;
    }

    const { publication_key } = usuarios[key];

    return showInfo(publication_key);
  };

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

  const showInfo = (key) => {
    return publicaciones[key].map((publication, idx) => (
      <div
        className='pub_titulo'
        key={publication.id}
        onClick={() => showComments(key, idx, publication.comments)}
      >
        <h2>
          {publication.id}. {publication.title}
        </h2>
        <h3>{publication.body}</h3>
        {publication.open && <Comments comments={publication.comments} />}
      </div>
    ));
  };

  const showComments = (key, idx, comments) => {
    openAndClose(key, idx);
    if (!comments.length) {
      getComments(key, idx);
    }
  };

  useEffect(() => {
    loadData();
  }, [usuarios]);

  return (
    <div>
      {loadUser()}
      {usuarios.length && !loading ? loadPublications() : ''}
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
