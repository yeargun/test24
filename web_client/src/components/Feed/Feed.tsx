import './Feed.css';
import Post from './../Post/Post';
import recommendedPosts from './../Recommended/RecommendedPosts.json';
function Feed() {
  return (
    <div className="feedWrapper">
      <ul>
        {recommendedPosts.map((post) => (
          <li key={post.id}>
            <Post highlightedComment={''} {...post} />
            <br />
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
