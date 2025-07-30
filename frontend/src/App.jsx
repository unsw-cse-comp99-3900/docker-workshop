import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || "http://backend:8080";

function App() {
  const [count, setCount] = useState(0);

  const [joke, setJoke] = useState({});

  const getJoke = () => {
    fetch(`${BASE_URL}/joke`)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setJoke(data);
        });
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Here's a randomly generated Joke!</h1>
      <div className="card">
        <h2>
          {joke.setup}
        </h2>
        <p style={{"fontSize": "20px"}}>
          {joke.punchline}
        </p>
      </div>

      <button onClick={getJoke}>
        Re-generate joke
      </button>
    </>
  )
}

export default App
