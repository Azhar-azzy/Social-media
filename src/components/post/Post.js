import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="image" />
      <div className="post__react">
        <img src={data.liked ? Heart : NotLike} alt={Heart} />
        <img src={Comment} alt={Comment} />
        <img src={Share} alt={Share} />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
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
