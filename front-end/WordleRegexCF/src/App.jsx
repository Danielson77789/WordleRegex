import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import Login from './pages/login'
import Game from './pages/game'
import Cookies from 'js-cookie';
import RouteGuard from './pages/RouteGuard';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const isAuthenticated = Cookies.get('logged_in');

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login></Login>}></Route>
        <Route path='/game' element={<Game></Game>}></Route> */}
        <Route path='/' element={<RouteGuard />}></Route>
        {/* Direct routes if needed, but RouteGuard manages the primary logic */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/game' element={<Game />}></Route>
      </Routes>
    </Router>
    


  /*  <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
  )
}

export default App
