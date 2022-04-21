import VisitedUser from "./pages/User/User";
import HomePage from "./pages/homePage/homePage";
import ExplorePage from "./pages/explorepage/explorepage";
import BookmarksPage from "./pages/bookmarkspage/bookmarkspage";
import AuthPage from "./pages/auth/signup";
import LoginPage from "./pages/login/login";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignupPage from "./pages/auth/signup";
import ProfilePage from "./pages/profile/profile";
import UpdateProfilePage from "./pages/updateprofile/updateprofile";
import { connect } from "react-redux";
import User from "./pages/User/User";
import FullPost from "./components/fullPost/fullPost";
import styled, { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import FullPostPage from "./pages/fullpostpage/fullpostpage";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: "REFRESH" }),
  };
};

const Tweeter = (props) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  let location = useLocation();

  return (
      
        <Routes>
          <Route path="register" element={<Navigate to="/signin" state={{from: location}}/>} />
          <Route path="signup" element={<SignupPage />} />
          {props.auth ? (
            <Route exact path="/" element={<HomePage />} />
          ) : (
            <Route path="/" element={<Navigate to="/signin" state={{from: location}}/>} />
          )}
          {props.auth ? (
            <Route path="/explore" element={<ExplorePage />} />
          ) : (
            <Route path="/explore" element={<Navigate to="/signin" state={{from: location}}/>} />
          )}
          {props.auth ? (
            <Route path="/bookmarks" element={<BookmarksPage />} />
          ) : (
            <Route path="/bookmarks" element={<SignupPage />} />
          )}
          {props.auth ? (
            <Route path="/profile" element={<User />} />
          ) : (
            <Route path="/profile" element={<Navigate to="/signin" replace state={{from: location}}/>} />
          )}
          {props.auth ? (
            <Route path="/settings" element={<ProfilePage />} />
          ) : (
            <Route path="/settings" element={<Navigate to="/signin" replace state={{from: location}}/>} />
          )}
          {props.auth ? (
            <Route path="/updateprofile" element={<UpdateProfilePage />} />
          ) : (
            <Route path="/updateprofile" element={<Navigate to="/signin" replace state={{from: location}}/>} />
          )}
          <Route path="/user" element={<VisitedUser />} />
          {props.auth ? (
            <Route path="/login" element={<Navigate to="/" replace/>} />
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}
            {props.auth ? (
              <Route path="/:user_id/:post_id" element={<FullPostPage/>} />
            ) : (
              <Route path="/:user_id/:post_id" element={<Navigate to="/signin" replace state={{from: location}}/>} />
            )}
            {
              props.auth ? (
                <Route path="/profile/:user_id" element={<User/>} />
              ) : (
                <Route path="/profile/:user_id" element={<Navigate to="/signin" replace state={{from: location}}/>} />
              )
            }
          <Route path="/signin" element={<LoginPage />} />
          <Route  />
        </Routes>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweeter);
