import React from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { useOneItem } from "./services";
import Header from "./Header";
// import data from "./data.js";


const DetailContainer = () => {
  const { id } = useParams();
  const { item } = useOneItem(id);

  return (
    <>
          <header>
        <Header />
      </header>
      <ItemDetail item={item} id={item.id} />
    </>
  );
};

export default DetailContainer;
