import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Properties from "./components/Properties";
import State from "./components/State";
import RendererCondicional from "./components/RendererCondicional";
import RendererComponent from "./components/RendererComponent";
import { EventsES6, EventsES7 } from "./components/Events";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> y guardar, despúes recarga.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Hello msg="Hola soy un componente funcional expresado desde una prop" />
          <hr />
          <Properties
            string="Esto es una cadena de texto"
            number={20}
            boolean={true}
            array={[1, 2, 3]}
            object={{ name: "Joan", email: "remyachizot2015@gmail.com" }}
            function={(num) => num * num}
            elementReact={<i>Esto es un elemento de React</i>}
            componenteReact={<Hello msg="Soy el componente Hello" />}
          />
          <hr />
          <State />
          <hr />
          <RendererCondicional />
          <hr />
          <RendererComponent />
          <hr />
          <EventsES6 />
          <hr />
          <EventsES7 />
        </section>
      </header>
    </div>
  );
};

export default App;
