import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followers__card">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img
                className="follower__img"
                src={follower.img}
                alt="followerimg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc__button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
