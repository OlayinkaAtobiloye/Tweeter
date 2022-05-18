import React, { useEffect } from "react";
import UserHeader from "../../components/userHeader/userHeader";
import ProfileCard from "../../components/profileCard/profileCard";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import LinksCard from "../../components/linksCard/linksCard";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SideBar from "../../components/Sidebar/Sidebar";
import Tweets from "../../components/tweets/tweets";
import { useNavigate, useParams } from "react-router-dom";
import Media from "../../components/tweets/media";
import Likes from "../../components/tweets/likes";


const User = props => {
  const navigate = useNavigate();
  let exact = useParams().exact;
  console.log(exact)
  
  return (
    <div>
      <Header />
      <UserHeader>
        <ProfileCard userId={useParams().user_id}/>
      </UserHeader>
      <Container>
        <SideBar>
          <LinksCard />
        </SideBar>
        <HomeContainer>
          {
            exact == 'tweets' ? <Tweets/>
            : exact == 'media' ? <Media/>
            : <Likes/>
          }
        </HomeContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageURL: state.imageURL,
    username: state.username,
    bio: state.bio,
  };
};

export default User;
