import Header from "../../components/header/header";
import CreateTweet from "../../components/createtweet/createtweet";
import FollowCard from "../../components/followCard/followCard";
import Container from "../../components/container/container";
import SideBar from "../../components/Sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import Feed from "../../components/feed/feed";
import Bio from "../../components/bio/bio";

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
          <Bio />
          <FollowCard />
        </SideBar>
      </Container>
    </div>
  );
};

export default HomePage;
