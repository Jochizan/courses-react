const Message = ({ msg, bgColor }) => {
  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
    backgroundColor: bgColor
  };

  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{__html: msg}}/>
    </div>
  );
};

export default Message;