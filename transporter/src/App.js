import logo from './logo.svg';
import './App.css';
import RouteFinder from './components/RouteFinder';
// import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouteFinder/>
      </header>
    </div>
  );
}

export default App;
