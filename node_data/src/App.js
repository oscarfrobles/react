import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto es lo que vamos a cambiar ahora 
        </p>
        <Component1>Aqui viene component1 llamado</Component1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
