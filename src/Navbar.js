import { Component } from "react";
import Header from "Header.js";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </Header>
      </div>
    );
  }
}

export default Navbar;
