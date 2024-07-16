import image from "../assets/3.jpg";
import classNames from "../styles/Video.module.css";

const Video = () => {
  return (
      <div className={classNames.video}>
        <img src={image} alt="Video Title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classNames.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
  );
};

export default Video;
