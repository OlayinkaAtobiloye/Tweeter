import Container from "../container/container";
import CreateTweet from "../createtweet/createtweet";
import Post from "../post/post";
import "./homeContainer.css"


const HomeContainer = (props) => {
    return(
    <div className="homeContainer">
        {props.children}
    </div>
    )
}

export default HomeContainer;