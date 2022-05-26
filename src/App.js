import './App.css';
import Home from "./Home/Home"
import Login from "./Login/Login"
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Buyingpage } from './buying page/Buyingpage';
function App() {
  return (
    <div>
       <Navbar />
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/men/banner/:id" element={<LandingPage />} />
          <Route path="/test" element={<Buyingpage />} />
      </Routes>
    </div>
  );

}

export default App;
