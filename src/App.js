import VisitedUser from "./pages/visitedUser/visitedUser";
import HomePage from "./pages/homePage/homePage";
import ExplorePage from "./pages/explorepage/explorepage";
import BookmarksPage from "./pages/bookmarks/bookmarks";
import AuthPage from "./pages/auth/signup";
import LoginPage from "./pages/login/login";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/auth/signup";
import ProfilePage from "./pages/profile/profile";
import UpdateProfilePage from "./pages/updateprofile/updateprofile";
import { connect } from "react-redux";




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

function App(props) {
  return (
    <div className="App">
      <Routes>
        {
          props.auth ?
          <Route path="/" element={<HomePage/>}/>
          :
          <Route path="/" element={<SignupPage/>}/>
        }
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/bookmarks" element={<BookmarksPage/>}/>
        <Route path="/user" element={<VisitedUser/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signin" element={<LoginPage/>}/>
        <Route path="register" element={<SignupPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/updateprofile" element={<UpdateProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
