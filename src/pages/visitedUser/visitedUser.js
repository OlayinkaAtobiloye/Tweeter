import React from "react";
import UserHeader from "../../components/userHeader/userHeader";
import ProfileCard from "../../components/profileCard/profileCard";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import Post from "../../components/post/post";
import LinksCard from "../../components/linksCard/linksCard";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SideBar from "../../components/Sidebar/Sidebar";

const VisitedUser = (props) => {
  return (
    <div>
      <Header />
      <UserHeader>
        <ProfileCard />
      </UserHeader>
      <Container>
        <SideBar>
          <LinksCard />
        </SideBar>
        <HomeContainer>
          <Post />
        </HomeContainer>
      </Container>
    </div>
  );
};

export default VisitedUser;
