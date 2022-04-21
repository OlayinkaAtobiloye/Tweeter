import Header from "../../components/header/header";
import CreateTweet from "../../components/createtweet/createtweet";
import FollowCard from "../../components/followCard/followCard";
import Container from "../../components/container/container";
import SideBar from "../../components/Sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import TrendsCard from "../../components/trendsCard/trendsCard";
import Feed from "../../components/feed/feed";
import styled, { createGlobalStyle,ThemeProvider } from 'styled-components';


const HomePage = (props) => {

  return (
    <div>
      <Header />
      <Container>
        <HomeContainer>
          <CreateTweet />
          <Feed />
        </HomeContainer>
        <SideBar>
          <TrendsCard />
          <FollowCard />
        </SideBar>
      </Container>
    </div>
  );
};

export default HomePage;
