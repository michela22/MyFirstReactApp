import logo from './logo.svg';
import './App.css';
import User from './User'; //faccio innesto di componente dentro un altro componente
import HelloWorld from './HelloWorld';

function ElementoLista(props){
   /* vado ad iterare sugli elementi del mio array , map da la possibilità di iterare sugli elementi di un array
  e ritornare del codice html dove è possibile accedere all'elemtno i-esimo della iterazione*/
  return <li>{props.elemento}</li>          
}

function App() { /*per indicare le classi css usa className e non class */

  const name = "Michela";
  const otherName= "Giulio";

  const lista =["Mele","Pere", "Patate"];
  


  return (
    <div className="App"> 
    
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    {/* <User user="user"/>*/}
        <User user={name} />
        <HelloWorld hello={otherName} />

       <ul>
          {lista.map((elemento) => {  {/* è come ngFor di Angular*/}
          return <ElementoLista elemento = {elemento} />
         })}
        </ul>
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
