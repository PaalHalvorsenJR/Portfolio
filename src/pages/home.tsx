import "../home.css";
import frame from "../assets/Frame.png";
import video from "../assets/oldTV1.mp4";
import questionMark from "../assets/questionMark.gif";
import phone from "../assets/phone.gif";
import insta from "../assets/Git.gif";
import code from "../assets/code.gif";
import car from "../assets/carGame.gif";
import tweet from "../assets/tweet.gif";
import meg from "../assets/megR.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleOpenGitHub = () => {
    const url = "https://github.com/PaalHalvorsenJR";
    // Open in a new tab/window
    window.open(url, "_blank");
  };
  const handleOpenLinkedIn = () => {
    const url = "https://www.linkedin.com/in/paal-halvorsen-522510222";
    window.open(url, "_blank");
  };

  return (
    <div className="frame-container">
      <div className="frame-image">
        <img src={frame} alt="framePic" />
      </div>
      <div className="container-in-frame">
        <div className="container-in-notePad">
          <div className="sub-container">
            <img
              src={questionMark}
              alt="questionMark"
              className="questionMark"
            />
            <button className="AboutMe" onClick={() => navigate("/aboutMe")}>
              About Me
            </button>
          </div>
          <div className="sub-container">
            <img src={phone} alt="phone" className="phone" />
            <button className="contact">
              <a href="mailto:paalhalvorsenjr@hotmail.com">Contact Me</a>
            </button>
          </div>
          <div className="sub-container">
            <img src={code} alt="code" className="code" />
            <h1 className="projects">Projects</h1>
          </div>
          <div className="sub-container">
            <img src={meg} alt="meg" className="meg" />
            <h1 className="megtext">Me </h1>
          </div>
          <div className="sub-container">
            <img src={insta} alt="insta" className="insta" />
            <button className="github" onClick={handleOpenGitHub}>
              Github
            </button>
          </div>
          <div className="sub-container">
            <img src={tweet} alt="git" className="git" />
            <button className="socials" onClick={handleOpenLinkedIn}>
              Socials
            </button>
            {/* <h1 className="socials">Socials</h1> */}
          </div>
          <div className="sub-container">
            <img src={car} alt="game" className="game" />
            <h1 className="gametext">Sick Game</h1>
          </div>
          <div className="sub-container">
            <h1 className="t-shirts"> Sick-Shirts</h1>
          </div>
        </div>
      </div>
      <div className="background">
        <video src={video} muted loop autoPlay></video>
      </div>
    </div>
  );
}
