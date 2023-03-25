import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route
          path="/home"
          element={
            <>
              <Navigation />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
