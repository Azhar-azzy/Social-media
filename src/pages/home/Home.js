import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSlide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSlide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
