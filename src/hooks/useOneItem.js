import { useEffect, useState } from "react";
import { fetchOneCompany } from "../services/services";

export const useOneCompany = (id) => {
    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState({});
  
    useEffect(() => {
      fetchOneCompany(id)
        .then(res => setCompany(res))
        .finally(() => setLoading(false));
    }, [id]);

    return { loading, company };
  };