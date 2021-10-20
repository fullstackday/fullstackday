import React, { useState, useEffect } from "react";

import './App.css';

function App() {
  let [documents, setDocuments] = useState([]);

  useEffect(async () => {
    let data = await fetch("http://localhost:8080/data").then(resp => resp.json());
    console.log(data);
    setDocuments(data);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        List of documents ({documents.length})
      </header>
      <main>
        {documents.map(document => {
          return <div>{JSON.stringify(document)}</div>
        })}
      </main>
    </div>
  );
}

export default App;
