import Header from "../../components/header/header";
import CreateTweet from "../../components/createtweet/createtweet";
import FollowCard from "../../components/followCard/followCard";
import Post from "../../components/post/post";
import Container from "../../components/container/container";
import SideBar from "../../components/Sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import TrendsCard from "../../components/trendsCard/trendsCard";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <HomeContainer>
          <CreateTweet />
          <Post />
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
