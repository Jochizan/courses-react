import CrudApp from './components/crudApp/CrudApp';
import CrudApi from './components/crudApi/CrudApi';

const App = () => {
  return (
    <div>
      <h1>Ejercicios con React</h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
};

export default App;
