import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const usePhotoList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const db = getDatabase();
      const photosRef = ref(db, "photos");
      const photoQuery = query(photosRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(photoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setPhotos(data);
        } else {
          setPhotos([]);
        }
      } catch (err) {
        console.log("Error fetching photos:", err);
        setLoading(false);
        setError(true);
      }
    }

    fetchPhotos();
  }, []);

  return { loading, error, photos };
};

export default usePhotoList;
