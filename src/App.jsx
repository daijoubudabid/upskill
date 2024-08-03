import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Homepage/Home";
import { Login } from "./pages/Login/Login";
import { Service } from "./pages/Service/Service";
import { SignUp } from "./pages/SignUp/SignUp";
import { Staff } from "./pages/Staff/Staff";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/staffs" element={<Staff/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
