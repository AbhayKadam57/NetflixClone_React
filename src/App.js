import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profiles from "./Pages/Profiles";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
