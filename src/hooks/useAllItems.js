import { useEffect, useState } from "react";
import { fetchAllItems } from "../services/services";

export const useAllItems = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchAllItems()
      .then((res) => setCompanies(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, companies };
};