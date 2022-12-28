import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Header from "./components/Header/Header"
import KnowUs from "./containers/KnowUs/KnowUs"
import Team from "./containers/Team/Team"
import Treatments from "./containers/Treatments/Treatments"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/knowus" element={<KnowUs />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/treatments" element={<Treatments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
