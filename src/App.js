import './App.css';
import { Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Header from './components/Homepage/Header/Header';
import Coins from './components/Homepage/Coins/Coins';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
