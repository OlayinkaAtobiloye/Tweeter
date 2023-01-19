import HomePage from "./pages/homePage/homePage";
import ExplorePage from "./pages/explorepage/explorepage";
import BookmarksPage from "./pages/bookmarkspage/bookmarkspage";
import LoginPage from "./pages/login/login";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignupPage from "./pages/auth/signup";
import ProfilePage from "./pages/profile/profile";
import UpdateProfilePage from "./pages/updateprofile/updateprofile";
import { connect } from "react-redux";
import User from "./pages/User/User";
import React from "react";
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
  let location = useLocation();

  return (
    <Routes>
      <Route path="register" element={<Navigate to="/signup" />} />
      {
        props.auth ? <Route path="signup" element={<Navigate to="/settings"/>} />
        :
        <Route path="signup" element={<SignupPage />} />

      }
      {props.auth ? (
        <Route exact path="/" element={<HomePage />} />
      ) : (
        <Route
          path="/"
          element={<Navigate to="/signin" state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route path="/explore" element={<ExplorePage />} />
      ) : (
        <Route
          path="/explore"
          element={<Navigate to="/signin" state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route path="/bookmarks" element={<BookmarksPage />} />
      ) : (
        <Route
          path="/bookmarks"
          element={<Navigate to="/signin" state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route path="/profile" element={<User />} />
      ) : (
        <Route
          path="/profile"
          element={<Navigate to="/signin" replace state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route path="/settings" element={<ProfilePage />} />
      ) : (
        <Route
          path="/settings"
          element={<Navigate to="/signin" replace state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route path="/updateprofile" element={<UpdateProfilePage />} />
      ) : (
        <Route
          path="/updateprofile"
          element={<Navigate to="/signin" replace state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route
          path="/login"
          element={<Navigate to="/" replace state={{ from: location }} />}
        />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      {props.auth ? (
        <Route path="/:username/:post_id" element={<FullPostPage />} />
      ) : (
        <Route
          path="/:username/:post_id"
          element={<Navigate to="/signin" replace state={{ from: location }} />}
        />
      )}
      {props.auth ? (
        <Route
          path="/profile/:exact/:user_id"
          element={<User />}
          key={location.key}
        />
      ) : (
        <Route
          path="/profile/:exact/:user_id"
          element={<Navigate to="/signin" replace state={{ from: location }} />}
        />
      )}
      <Route path="/signin" element={<LoginPage />} />
      <Route />
    </Routes>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweeter);
