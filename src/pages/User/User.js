import React, { useEffect } from "react";
import UserHeader from "../../components/userHeader/userHeader";
import ProfileCard from "../../components/profileCard/profileCard";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import LinksCard from "../../components/linksCard/linksCard";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SideBar from "../../components/Sidebar/Sidebar";
import Tweets from "../../components/tweets/tweets";
import { useParams } from "react-router-dom";
import Media from "../../components/tweets/media";
import Likes from "../../components/tweets/likes";
import Retweets from "../../components/tweets/retweets";


const User = props => {
  let exact = useParams().exact;
  
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
            : exact == 'retweets' ? <Retweets/>
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
