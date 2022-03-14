import { useEffect, useState } from "react";
import { fetchOneItem } from "../services/services";

export const useOneItem = (id) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchOneItem(id)
        .then((item) => setItem(item))
        .finally(() => setLoading(false));
    }, [id]);
    return { loading, item };
  };