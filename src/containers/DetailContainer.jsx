import React from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/items/ItemDetail";
import { useOneItem } from "../hooks/useOneItem";
import Header from "../components/Header";

const DetailContainer = () => {
  const { id } = useParams();
  const { loading, item } = useOneItem(id);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header>
        <Header />
      </header>
      <ItemDetail {...item} />
    </>
  );
};

export default DetailContainer;
