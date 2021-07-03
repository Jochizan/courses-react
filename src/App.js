import './App.css';

import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';

const App = () => {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href='https://es.reactjs.org/docs/context.html'
        target='_blank'
        rel='noreferrer'
      >
        Documentación
      </a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
};

export default App;
