import CrudApi from './components/crudApi/CrudApi';
import SongSearch from './components/songSearch/SongSearch';

const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <a
        href='https://reactrouter.com/web/guides/quick-start'
        target='_blank'
        rel='noreferrer'>
        Documentación
      </a>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
    </>
  );
};

export default App;
