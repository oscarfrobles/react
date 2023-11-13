import logo from './logo.svg';
import './App.css';
import List from './components/Products';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
</Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List></List>
      </header>
    </div>
    </>
  );
}

export default App;
