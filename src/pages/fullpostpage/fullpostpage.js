import React from "react";
import Container from "../../components/container/container";
import SideBar from "../../components/Sidebar/Sidebar";
import HomeContainer from "../../components/homeContainer/homeContainer";
import SortedTweets from "../../components/sortedtweets/sortedtweets";
import Header from "../../components/header/header";
import SearchBox from "../../components/searchbox/searchbox";
import Feed from "../../components/feed/feed";
import FullPost from "../../components/fullPost/fullPost";


const FullPostPage = props => {
    return(
        <div>
            <Header/>
            <Container>
                <SideBar>
                    <SortedTweets/>
                </SideBar>
                <HomeContainer>
                    <FullPost/>
                </HomeContainer>
            </Container>
        </div>
    )
}

export default FullPostPage;