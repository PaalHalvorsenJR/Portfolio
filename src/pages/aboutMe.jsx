import React, { useState, useEffect, useRef } from 'react';
import frame from '../assets/Frame.png';
import firstVideo from '../assets/aboutMe1.mp4';
import secondVideo from '../assets/sky.mp4';
import '../style/aboutMe.css';

export default function AboutMe() {
  const [video, setVideo] = useState(firstVideo);
  // Managing content with an object
  const [content, setContent] = useState({
    title: '',
    description: '' // Assuming no description for the first video
  });
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.onended = () => {
        if (video === firstVideo) {
          setVideo(secondVideo);
          // Update content for the second video
          setContent({
            title: 'Hi, i am Paal Halvorsen',
            description: "At the University of Bergen, I'm sculpting my future with a unique blend of disciplines: Informatics, Mathematics, and Economics, my trinity of passion. This journey isn't just about earning a degree in Informatics-Mathematics-Economics; it's about blending these fields to craft innovative websites and programs. My creativity finds its expression at the crossroads of these disciplines, turning abstract concepts into tangible solutions. As I weave through my studies, every project is a step towards merging technology with the elegance of mathematics and the insights of economics, aiming to innovate and connect in a digital era."
          });
        } else {
          // Optionally handle what happens after the second video ends
        }
      };
      videoElement.loop = video === secondVideo;
      videoElement.play();
    }
  }, [video]);

  return (
    <div className="frame-container">
      <div className="frame-image">
        <img src={frame} alt="framePic" />
      </div>
      <div className="background">
        <video src={video} muted autoPlay ref={videoRef}></video>
        <div className="video-content">
          <div className="video-title">
            {content.title}
          </div>
          <div className="video-description">
          </div>
          {content.description && <div className="extra-video-description">{content.description}</div>}
        </div>
      </div>
    </div>
  );
}
