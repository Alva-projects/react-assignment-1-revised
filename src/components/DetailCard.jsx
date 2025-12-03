import "../index.css";
import ProfileCard from "./ProfileCard";

function DetailCard({ project, onClose }) {
  return (
    <div className="details-overlay" onClick={onClose}>
      <div className="details-card">
        <div>
          <img
            src={project.screenshot}
            alt={project.name}
            className="details-img"
          />
        </div>
        <div className="details-card-info">
          <h2>{project.name}</h2>
          <p>{project.repo}</p>
          <p>{project.techUsed}</p>
          <p>{project.writeUp}</p>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="mapping">
        {DetailCard.map((project, index) => (
          <ProfileCard
            key={index}
            pTitle={project.title}
            pTags={project.tags}
              
          />
        ))}
      </div>
    </div>
  );
}

export default DetailCard;
