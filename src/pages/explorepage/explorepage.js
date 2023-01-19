import React from "react";
import Container from "../../components/container/container";
import SideBar from "../../components/Sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SortedTweets from "../../components/sortedtweets/sortedtweets";
import Header from "../../components/header/header";
import SearchBox from "../../components/searchbox/searchbox";
import Feed from "../../components/feed/feed";
import Explore from "../../components/explore/explore";
import LinksCard from "../../components/linksCard/linksCard";

const ExplorePage = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <SideBar>
          <LinksCard />
        </SideBar>
        <HomeContainer>
          {/* <SearchBox/> */}
          <Explore />
        </HomeContainer>
      </Container>
    </div>
  );
};

export default ExplorePage;
