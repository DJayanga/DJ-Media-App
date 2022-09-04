import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Notification from "../../img/notification.png";
import Comment from "../../img/comment.png";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="Home" />
        <UilSetting />
        <img src={Notification} alt="Notification" />
        <img src={Comment} alt="Comment" />
      </div>
      <TrendCard />

      <button
        className="button r-button"
        onClick={() => setModalOpened(true)}
        style={{ cursor: "pointer" }}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
