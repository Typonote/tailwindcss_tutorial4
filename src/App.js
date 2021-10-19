import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Stack from './components/stack';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Stack />
    </div>
  );
}

export default App;
