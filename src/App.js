import logo from './logo.svg';
import './App.css';
import User from './User'; //faccio innesto di componente dentro un altro componente
import HelloWorld from './HelloWorld';

function App() { /*per indicare le classi css usa className e non class */

  const name = "Michela";
  const otherName= "Giovanni";

  return (
    <div className="App"> 
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    {/* <User user="user"/>*/}
        <User user={name} />
        <HelloWorld hello={otherName} />
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

export default App; //importante che ci sia per ogni component definita
