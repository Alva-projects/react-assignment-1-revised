import ProfileCard from "./ProfileCard";
import { useState } from "react";
import "../index.css";

function ShowBtn() {
  const [show, setShow] = useState(false);
  const visibilityHandler = () => {
    setShow(!show);
  };

  return (
    <div className="portfolio-container">
      <h2 className="Title">Portfolio</h2>
      <button onClick={visibilityHandler} className="show-btn">
        {show ? "Hide Projects" : "Show Projects"}
      </button>
      {show && <ProfileCard />}

    </div>
  );
}

export default ShowBtn;
