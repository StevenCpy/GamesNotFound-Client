import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  const [LoggedIn, setLoggedIn] = useState(false)
  let username = "RandomUser"

  return (
    <BrowserRouter>
      <nav id="main-nav-bar">
        <div style={{
            display:"flex",
            flexDirection: "row",
        }}>

          <span>
            <Link to="/">GamesNotFound</Link> | {" "}
            <Link to="/Store">Store</Link>
          </span>
          <span style={{ marginLeft:"auto" }}>
          {LoggedIn ?
            <Link to="/Profile">{username}</Link> : <Link to="/Signup">Sign Up/Login</Link>
          }
          </span>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Store" element={ <Store /> } />
        <Route path="/Profile" element={ <Profile /> } />
        <Route path="/Signup" element={ <Signup /> } />
        <Route path="/Login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
