import { useState, useEffect } from "react";
import './App.css';

import Cocktails from './Components/Cocktails/Cocktails.js'

function App() {
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch("/cocktails")
      .then((r) => r.json())
      .then((data) => setCocktails(data));
  }, []);

  return (
    <div className="App">
      <Cocktails cocktails={cocktails} />
    </div>
  );
}

export default App;
