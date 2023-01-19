import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../components/profilebackdrop/profilebackdrop";
import UserImage from "../../Images/johndoe.jpg";
import Tweeter from "../../Images/tweeter.svg";
import "./updateprofile.css";
import { connect } from "react-redux";
import * as actions from "../../store/action";

class UpdateProfilePage extends React.Component {
  state = {
    data: {
      profile_image: null,
      username: this.props.username,
      bio: this.props.bio,
      email: this.props.email,
      phone: null,
    },
    error: this.props.error,
    message: this.props.message,
    showDropdown: false,
    imageURL: this.props.imageURL,
    loading: false,
  };

  setshowDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleChange = (event) => {
    let name = event.target.name;
    switch (name) {
      case "image":
        this.setState({
          data: {
            ...this.state.data,
            profile_image: event.target.value,
          },
        });
        break;
      case "username":
        this.setState({
          data: {
            ...this.state.data,
            username: event.target.value,
          },
        });
        break;
      case "bio":
        this.setState({
          data: {
            ...this.state.data,
            bio: event.target.value,
          },
        });
        break;
      case "email":
        this.setState({
          data: {
            ...this.state.data,
            email: event.target.value,
          },
        });
        break;
      case "phone":
        this.setState({
          data: {
            ...this.state.data,
            phone: event.target.value,
          },
        });
        break;
    }
  };

  setImage = () => {
    const imageurl = URL.createObjectURL(this.state.data.profile_image);
    this.setState(() => {
      return { imageURL: imageurl };
    });
  };

  setImageAction = () => {
    const formData = new FormData();
    formData.append("file", this.state.data.profile_image);
    this.setState({
      data: {
        ...this.state.data,
        profile_image: formData,
      },
    });
    // do your post request
  };

  onImageChange = (event) => {
    this.setState(() => {
      return {
        data: {
          ...this.state.data,
          profile_image: event.target.files[0],
        },
      };
    }, this.setImage);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const button = document.querySelector("#saveDetails");
    button.disabled = true;
    this.setState({ loading: true });
    const data = this.state.data;
    const stateKeys = Object.keys(data);
    const formData = new FormData();
    stateKeys.map((key) => {
      formData.append(key, data[key]);
    });

    this.props.onSubmit(formData);
  };

  render() {
    return (
      <div className="editProfile">
        <header className="profileHeader">
          <Link to="/">
            <img src={Tweeter} />
          </Link>
          <div className="userProfile" onClick={this.setshowDropdown}>
            <a className="userSummary">
              <img
                src={this.state.imageURL ? this.state.imageURL : UserImage}
                className="userImage"
              />
              <span className="username">{this.props.username}</span>
            </a>
            {this.state.showDropdown ? <ProfileDropdown /> : null}
          </div>
        </header>

        <form className="profileDetails" onSubmit={this.handleSubmit}>
          <div className="profileEditPrompt noborder">
            <div>
              <p>Change Info</p>
              <p>Changes will be reflected to every services</p>
              {this.state.error && (
                <p style={{ color: "red" }}>{this.state.error}</p>
              )}
              {this.state.message && (
                <p style={{ color: "green" }}>{this.state.message}</p>
              )}
            </div>
          </div>
          <a className="changephoto">
            <label htmlFor="file-input" className="file-input">
              <img
                src={this.state.imageURL ? this.state.imageURL : UserImage}
                className="editProfileImage"
              />
              <i className="material-icons-outlined changephotoIcon">
                photo_camera
              </i>
              <span>CHANGE PHOTO</span>
            </label>
            <input
              type="file"
              accept="image"
              id="file-input"
              name="image-upload"
              onChange={this.onImageChange}
            />
          </a>
          <div className="editProfileDiv">
            <label>Name</label>
            <input
              placeholder={this.props.username}
              name="username"
              onChange={this.handleChange}
              maxLength="20"
            />
          </div>
          <div className="editProfileDiv">
            <label>Bio</label>
            <input
              placeholder={this.props.bio}
              name="bio"
              onChange={this.handleChange}
              maxLength="160"
            />
          </div>
          <div className="editProfileDiv">
            <label>Phone</label>
            <input
              placeholder={
                this.props.phone ? this.props.phone : "Enter your phone"
              }
              name="phone"
              onChange={this.handleChange}
            />
          </div>
          <div className="editProfileDiv">
            <label>Email</label>
            <input
              placeholder={this.props.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <button id="saveDetails">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    bio: state.bio,
    username: state.username,
    email: state.email,
    error: state.error,
    message: state.message,
    phone: state.phone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (authData) => dispatch(actions.saveDetails(authData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfilePage);
