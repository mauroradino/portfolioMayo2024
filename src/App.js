import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import ParticleBackground from './Components/Background/Background';
function App() {
  return (
    <div className='App'>
      <Router>
        <ParticleBackground id="particles" />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
