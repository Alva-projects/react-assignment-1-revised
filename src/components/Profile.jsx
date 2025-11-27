import DetailCard from "./DetailCard";
import "./profile.css";
import { useState } from "react";

function Profile({ screenshot, name, repo, techUsed, writeUp }) {
  //Needs a capital letter to start
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="profile_card">
        <img src={screenshot} alt="" className="image" />
        <div className="info">
          <h2 className="title">{name} </h2>
          {/* <a href={repo} className="repo_link">
            Github Link
          </a>
          <p className="tech">{techUsed}</p>
          <p className="description">{writeUp}</p>*/}
          <button
            className="details-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            Details
          </button>
        </div>
      </div>

      {isOpen && (
        <DetailCard
          project={{
            screenshot,
            name,
            repo,
            techUsed,
            writeUp,
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Profile; //This only lets me export one function per file
