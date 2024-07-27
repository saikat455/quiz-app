import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (photoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + photoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          setQuestions(data);
        } else {
            setQuestions([]);
        }
      } catch (err) {
        console.log("Error fetching videos:", err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [photoID]);

  return { loading, error, questions };
};

export default useQuestions;
