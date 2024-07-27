import { Link } from "react-router-dom";
import usePhotoList from "../hooks/usePhotoList";
import Photo from "./Photo";
import styles from "../styles/Photos.module.css";

const Photos = () => {
  const { loading, error, photos } = usePhotoList();
  const safePhotos = photos || [];

  return (
    <div className={styles.photosContainer}>
      {loading && <span className="loading loading-dots loading-lg"></span>}
      {error && <div>There was an error</div>}
      {!loading && safePhotos.length === 0 && <div>No data found</div>}
      {!loading && safePhotos.length > 0 && (
        <div className={styles.photoGrid}>
          {safePhotos.map((photo) =>
            photo.noq > 0 ? (
              <Link to={`/quiz/${photo.photoID}`} key={photo.photoID}>
                <Photo
                  title={photo.title}
                  photoID={photo.photoID} 
                  imageURL={photo.imageURL} 
                  noq={photo.noq}
                />
              </Link>
            ) : (
              <div key={photo.photoID}>
                <Photo
                  title={photo.title}
                  photoID={photo.photoID} 
                  imageURL={photo.imageURL} 
                  noq={photo.noq}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Photos;
