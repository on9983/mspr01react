import logo from './logo.svg';
import './App.css';
import Bonjour from './components/Bonjour.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bonjour</p>
        <Bonjour name="Me" UrlApi="http://127.0.0.1:8000/login/jsonLogin"></Bonjour>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
