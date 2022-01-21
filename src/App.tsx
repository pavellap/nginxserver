import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/api-github/repos/pavellap/tables').then(res => res.json()).then(res => console.log("RESULT: ", res))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This comes from custom webpack config
        </p>
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
