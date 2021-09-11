import Failed from '../General/Falied';
import Loader from '../General/Loader';
import { connect } from 'react-redux';

const Comments = ({ comError, comLoading, comments }) => {
  if (Object.keys(comError).length)
    return <Failed message={comError.message} />;

  if (comLoading && !comments.length) return <Loader />;

  const showComments = () =>
    comments.map((comment, idx) => (
      <li key={idx}>
        <b>
          <u>{comment.email}</u>
        </b>
        <br />
        {comment.body}
      </li>
    ));

  return <ul>{showComments()}</ul>;
};

const mapStateToProps = ({ publicationReducer }) => publicationReducer;

export default connect(mapStateToProps)(Comments);
