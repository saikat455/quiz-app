

import styles from "../styles/Photo.module.css";

const Photo = ({ title, photoID, noq, imageURL }) => {
  return (
    <div className={styles.photo}>
      <img src={imageURL} alt={title} />
      <p>{title}</p>
      <div className={styles.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Photo;

