import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import Login from "./containers/User/Login/Login";
import Register from "./containers/User/Register/Register";
import Header from "./components/Header/Header";
import KnowUs from "./containers/KnowUs/KnowUs";
import Team from "./containers/Team/Team";
import Treatments from "./containers/Treatments/Treatments";
import Endodoncia from "./containers/Treatments/Endodoncias";
import Estetica from "./containers/Treatments/Estetica";
import Implantes from "./containers/Treatments/Implantes";
import Odontopediatria from "./containers/Treatments/Odontopediatria";
import Ortodoncia from "./containers/Treatments/Ortodoncia";
import Invisalign from "./containers/Treatments/Invisalign";
import Periodoncia from "./containers/Treatments/Periodoncia";
import Protesis from "./containers/Treatments/Protesis";
import Profile from "./containers/User/Profile/Profile";
import UpdateProfile from "./containers/User/UpdateProfile/UpdateProfile"
import MyAccount from "./containers/MyAccount/MyAccount";
import Appointments from "./containers/User/Appointments/Appointments";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App appDesign">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/knowus" element={<KnowUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/endodoncia" element={<Endodoncia />} />
          <Route path="/estetica" element={<Estetica />} />
          <Route path="/implantes" element={<Implantes />} />
          <Route path="/odontopediatria" element={<Odontopediatria />} />
          <Route path="/ortodoncia" element={<Ortodoncia />} />
          <Route path="/invisalign" element={<Invisalign />} />
          <Route path="/periodoncia" element={<Periodoncia />} />
          <Route path="/protesis" element={<Protesis />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
