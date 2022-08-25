import logo from './logo.svg';
import './App.css';
import Wealcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wealcome message="Welcome from props" name="Tzuyu" />
      </header>
    </div>
  );
}

export default App;
