import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="post__share">
      <img src={ProfileImage} alt="Profile" />
      <div>
        <input type="text" placeholder="What's happening?" />

        <div className="post__options">
          <div
            className="option"
            onClick={() => imageRef.current.click()}
            style={{ color: "var(--photo)" }}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps__button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              onChange={onImageChange}
              ref={imageRef}
            />
          </div>
        </div>
        {image && (
          <div className="preview__image">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
