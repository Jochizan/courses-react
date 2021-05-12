import { useHistory, useLocation } from 'react-router-dom';

const Productos = () => {
  // let location = useLocation();
  // console.log(location)
  const LIMIT = 20;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query);

  let start = parseInt(query.get('inicio')) || 1;
  let end = parseInt(query.get('fin')) || LIMIT;

  let history = useHistory();
  console.log(history);

  const handlePrev = (e) => {
    if (start === 1) {
      return;
    }
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
