import React from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/items/ItemDetail";
import { useOneItem } from "../hooks/useOneItem";

const DetailContainer = () => {
  const { id } = useParams();
  const { loading, item } = useOneItem(id);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <ItemDetail {...item} />
    </>
  );
};

export default DetailContainer;
