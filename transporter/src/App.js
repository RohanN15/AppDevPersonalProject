import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RouteFinder from './components/RouteFinder';
import MainPage from '/Users/rohan/Desktop/AppDevBootcamp/AppDevPersonalProject/transporter/src/components/MainPage.js';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="RouteFinder" element={<RouteFinder/>} />
      </Routes>
    </Router>
  );
}

export default App;
