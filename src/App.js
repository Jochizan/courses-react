import logo from './logo.svg';
import './App.css';
import MyPage from './components/MyPage';

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href='https://es.react.org/docs/context.html'
        target='_blank'
        rel='noreferrer'
      >
        Documentación
      </a>
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
