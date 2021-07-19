import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Nav />

        <main className="form-signin">
            <Login />
      </main>
    </div>
  );
}

export default App;
