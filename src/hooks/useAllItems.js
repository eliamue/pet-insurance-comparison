import { useEffect, useState } from "react";
import { fetchAllCompanies } from "../services/services";

export const useAllCompanies = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchAllCompanies()
      .then((res) => setCompanies(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, companies };
};
