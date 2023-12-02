import logo from "./logo2.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid"
        alt="logo" />
      </header>
      <main>
        <Dictionary  defaultKeyword="sunrise"/>
      </main>
      <footer className="App-footer"> 
        <small>Coded by Kalli Zembillas<a href="https://github.com/kzembill/dictionary-project.git">Open Sourced</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;