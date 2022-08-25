import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// componets
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Wealcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wealcome message="Welcome from props" name="Tzuyu" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutMe/>} />
          </Routes>
          <Routes>
            <Route path="/profile/:name" element={<Profile/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
