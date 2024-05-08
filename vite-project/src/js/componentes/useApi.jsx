import { useState, useEffect } from 'react';
import './styles/style.css'

function useApi(apiFunc) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiFunc();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.log("bandera");
      }
    };

    fetchData();
  }, [apiFunc]);

  return { data, loading, error };
}
export default useApi;