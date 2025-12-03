import Profile from "./Profile.jsx";
import screenshotBhromaon from "../assets/ScreenshotBhromaon.png";
import screenshotRecepies from "../assets/Screenshot_recipies.png";
import screenshotDJ from "../assets/Screenshot_DJ.png";
import "./Card.css";

function ProfileCard() {
  return (
    <>
      <div className="ProfileCard">
        <Profile
          screenshot={screenshotBhromaon}
          name={"Bhromaon"}
          repo={"https://github.com/Alva-projects/bhromaon.git"}
          techUsed={"HTML and CSS5."} 
          writeUp={"The project initially did not go as i planned it too. I tried to create all of the home page rather than only having time to create one part leaving the othe parts blank. It was a good challange wich made me practice prioritizing."
          }
        />
        <Profile
          screenshot={screenshotRecepies}
          name={"Recepies"}
          repo={"Lorem"}
          techUsed={"Describe"}
          writeUp={"Lorem ipsum"}
        />
        <Profile
          screenshot={screenshotDJ}
          name={"DJ"}
          repo={"Lorem"}
          techUsed={"Describe"}
          writeUp={"Lorem ipsum"}
        />
      </div>
    </>
  );
}

export default ProfileCard;
