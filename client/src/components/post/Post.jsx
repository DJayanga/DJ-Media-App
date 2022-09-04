import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Like from "../../img/like.png";
import Share from "../../img/share.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt={data.name} />
      <div className="postReact">
        <img src={data.liked ? Like : NotLike} alt="Like" />
        <img src={Comment} alt="Comment" />
        <img src={Share} alt="Share" />
      </div>

      <span style={{ color: "var(--grey)", fontSize: "12px" }}>
        {data.likes} Likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
