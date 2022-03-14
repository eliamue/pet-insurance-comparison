import { useEffect, useState } from "react";
import { fetchOneItem } from "../services/services";

export const useOneItem = (id) => {
    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState({});
  
    useEffect(() => {
      fetchOneItem(id)
        .then(res => setCompany(res))
        .finally(() => setLoading(false));
    }, [id]);

    return { loading, company };
  };