import React from "react";
import Container from "../../components/container/container";
import SideBar from "../../components/sidebar/sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SortedTweets from "../../components/sortedtweets/sortedtweets";
import Header from "../../components/header/header";
import FullPost from "../../components/fullPost/fullPost";
import LinksCard from "../../components/linksCard/linksCard";

const FullPostPage = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <SideBar>
          <LinksCard />
        </SideBar>
        <HomeContainer>
          <FullPost />
        </HomeContainer>
      </Container>
    </div>
  );
};

export default FullPostPage;
