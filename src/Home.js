import { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <br />
        <br />
        <Link to="/sign-up">
          <button>SignUp</button>
        </Link>
      </div>
    );
  }
}

export default Home;
