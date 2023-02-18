import styles from "../../styles/Post.module.css";

interface Post {
  text: string;
  likes: number;
  reposts: number;
  username: string;
  highlightedComment: string;
}

function Post({ text, likes, reposts, highlightedComment, username }: Post) {
  if (!highlightedComment) highlightedComment = "xd";
  return (
    <div className="postWrapper">
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZSS982e8z0Y6c8RstvIT5m%2FSTUF-QUESTION-DESIGN%3Fnode-id%3D0%253A1%26t%3DWkMu01rmhtoVjzlS-1"
        allowFullScreen
      ></iframe>
      <div className="postSettings"></div>
      <div className="content">{text}</div>
      <div className="ReactionsWrapper">
        <div className="username">{username}</div>

        <div className="likeCount">{likes}</div>
        <div className="repostCount">{reposts}</div>
        <div className="commentCount">1</div>
        <div className="highlightedComment">{highlightedComment}</div>

        <input type="text" id="comment" name="comment" />
      </div>
    </div>
  );
}

export default Post;
