import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./firstPage.css";
import frame from "./assets/Frame.png";
import firstVideo from "./assets/firstvideo.mp4";
import secondVideo from "./assets/midvideo.mp4";
import lastVideo from "./assets/lastvideo.mp4";

export default function firstPage() {
  const [currentVideo, setCurrentVideo] = useState(firstVideo);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        // Check if the current video is the last one
        if (currentVideo === lastVideo) {
          navigate("/home"); // Navigate to the Home component
        } else {
          // If it's not the last video, proceed to the next video
          setCurrentVideo(
            currentVideo === firstVideo ? secondVideo : lastVideo
          );
        }
      };

      // Attempt to play the video
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      // Loop the second video if it's the current video
      video.loop = currentVideo === secondVideo;
    }
    return () => {
      if (video) {
        video.onended = null; // Clean up the onended event handler
      }
    };
  }, [currentVideo, navigate]); // Add navigate to the dependency array

  const handleButtonClick = () => {
    setCurrentVideo(lastVideo); // Switch to the last video on button click
  };

  return (
    <div className="frame-container">
      <div className="frame-image">
        <img src={frame} alt="framePic" />
        <button onClick={handleButtonClick} className="button">
          HALLO
        </button>
      </div>
      <div className="background">
        <video src={currentVideo} muted autoPlay ref={videoRef}></video>
      </div>
    </div>
  );
}
