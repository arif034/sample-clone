import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Component } from "react";
import Home from "./Home.js";
import About from "./About.js";
import Contacts from "./Contacts.js";
import SignUp from "./SignUp.js";
import Login from "./Login.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
