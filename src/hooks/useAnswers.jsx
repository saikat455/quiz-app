import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useAnswers = (photoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + photoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setAnswers(data);
        } else {
            setAnswers([]);
        }
      } catch (err) {
        console.log("Error fetching photos:", err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [photoID]);

  return { loading, error, answers };
};

export default useAnswers;
