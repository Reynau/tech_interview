import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Modify from "./pages/Modify/Modify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/modify/:code" element={<Modify />} />
      </Routes>
    </div>
  );
}

export default App;
