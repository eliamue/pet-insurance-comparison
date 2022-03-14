import { useEffect, useState } from "react";
import { fetchAllItems } from "../services/services";

export const useAllItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems()
      .then((res) => setItems(res))
      .finally(() => setLoading(false));
  }, []);

  return { loading, items };
};
