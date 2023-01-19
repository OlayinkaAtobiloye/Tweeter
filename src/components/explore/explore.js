import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/post";
import { connect } from "react-redux";
import Bio from "../bio/bio";
import Spinner from "../spinner/spinner";

const Explore = (props) => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword != "") {
      setLoading(true);
      let url = `https://tweeter-8qqa.onrender.com/search/${keyword}`;
      axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: props.token,
        },
      })
        .then((res) => {
          setLoading(false);
          setError(false);
          setPosts(res.data.posts);
          setUsers(res.data.users);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  }, [search]);

  useEffect(() => {
    setError(false);
    setLoading(false);
  }, []);

  return (
    <div>
      <form
        className="searchbox"
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(!search);
        }}
      >
        <span className="material-icons-outlined searchIcon">search</span>
        <input
          type="search"
          placeholder="Search"
          className="searchBox"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="searchButton">Search</button>
      </form>
      <section>
        {loading && <Spinner />}
        {!loading && error && (
          <p style={{ display: "flex", justifyContent: "center" }}>
            Sorry, an error occured. Please try again.
          </p>
        )}
        {!loading && !error && users.length === 0 && posts.length === 0 && (
          <p style={{ display: "flex", justifyContent: "center" }}>
            Nothing to see here - yet.
          </p>
        )}
        {!loading &&
          posts.map((post, index) => (
            <Post
              user={post.user}
              caption={post.caption}
              image={post.post_urls[0]}
              comments={post.comments}
              retweets={post.retweets}
              datetime={post.createdAt}
              post_id={post._id}
              liked={post.liked}
              likes={post.likes}
              retweeted={post.retweeted}
              saved={post.saved}
            />
          ))}
        {!loading &&
          users.map((user, index) => (
            <Bio
              bio={user.bio}
              imageURL={user.profile_image}
              userId={user._id.$oid}
              username={user.username}
              key={index}
            />
          ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(Explore);
