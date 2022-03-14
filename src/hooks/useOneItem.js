import { useEffect, useState } from "react";
import { fetchOneItem } from "../services/services";

export const useOneItem = (id) => {
    const [item, setItem] = useState({});
  
    useEffect(() => {
      fetchOneItem(id)
        .then(res => setItem(res));
    }, [id]);
    console.log("useOneItem hook", item)
    return { item };
  };