import React from "react";
import Tweeter from "../../Images/tweeter.svg";
import "./signup.css";
import Auth from "../../components/auth/auth";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <Auth>
      <div className="signupPage">
        <Link to="/">
          <img src={Tweeter} className="tweeterHome" />
        </Link>
        <p>Join thousands of learners from around the world </p>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form>
          <span class="material-icons-outlined">email</span>
          <input type="email" placeholder="Email" />
          <span class="material-icons-outlined">
lock
</span>
          <input type="password" placeholder="Password" />
          <button>Start coding now</button>
        </form>
        <div>
          <p>or continue with these social profile</p>
          {/* <i class="fa fa-google"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-github"></i> */}
        </div>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </Auth>
  );
};

export default SignupPage;
