import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import Home from "./Home";
import News from "./News"


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
      </Routes>
    </div>

  );
}

export default App;
