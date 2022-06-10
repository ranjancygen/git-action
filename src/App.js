import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import About from './About';
import GetTodoList from './GetTodoList';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Aws Class</h1>
      <h1>Lets Learn AWs</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<GetTodoList/>} />
      </Routes>
    </div>
  );
}

export default App;
