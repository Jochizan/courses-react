import CrudApi from './components/crudApi/CrudApi';
import SongSearch from './components/songSearch/SongSearch';
import { CrudProvider } from './context/CrudContext';

// styles
import './App.css';

const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <a
        href='https://reactrouter.com/web/guides/quick-start'
        target='_blank'
        rel='noreferrer'
      >
        Documentación
      </a>
      <hr />
      <SongSearch />
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </>
  );
};

export default App;
