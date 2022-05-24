import React, { useState } from "react";
import { UilSetting } from "@iconscout/react-unicons";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="right__side">
      <div className="nav__icons">
        <img src={Home} alt="home" />
        <UilSetting />
        <img src={Noti} alt="home" />
        <img src={Comment} alt="home" />
      </div>
      <TrendCard />
      <button className="button r__button" onClick={() => setModalOpened(true)}>
        Share
      </button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
