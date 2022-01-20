import React from "react";
import Tweeter from "../../Images/tweeter.svg";
import "./login.css";
import Auth from "../../components/auth/auth";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Auth>
      <div className="signupPage">
        <Link to="/">
          <img src={Tweeter} className="tweeterHome" />
        </Link>
        <form>
          <span class="material-icons-outlined">email</span>
          <input type="email" placeholder="Email" />
          <span class="material-icons-outlined">
lock
</span>
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <div>
          <p>or continue with these social profile</p>
          {/* <i class="fa fa-google"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-github"></i> */}
        </div>
        <p>
          Don't have an account yet? <Link to="/signup">Register</Link>
        </p>
      </div>
    </Auth>
  );
};

export default LoginPage;
