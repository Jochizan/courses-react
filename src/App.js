import logo from './logo.svg';
import './App.css';
import Styles from './components/Styles';
import StyledComponents from './components/StyledComponents';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Editar <code>src/App.js</code> y guardar, despúes recarga.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </section>
        <section>
          <Styles />
          <hr />
          <StyledComponents />
        </section>
      </header>
    </div>
  );
};

export default App;
