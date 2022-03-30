import './App.css';
import { Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Header from './components/Homepage/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
