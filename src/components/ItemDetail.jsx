import React from "react";
import { useParams } from "react-router-dom";
import { useOneItem } from '../hooks/useOneItem';

import dentalimg from "./assets/dental.png";
import foodimg from "./assets/food.png";

const ItemDetail = () => {
  const { id } = useParams();
  const { item } = useOneItem(id);
  const {
    title,
    website,
    logo,
    quote,
    death,
    cured,
    fee,
    deductable,
    uniquetrait,
    reviews,
    cancellation,
    remax,
    rerate,
    dental,
    food
  } = item;

  return (
    <>
      <figure className="item-container">
        <figcaption className="name">{title}</figcaption>
        <a href={website} alt={title}>
          <img src={logo} className="logo" alt={title} />
        </a>
        <div className="cancellation">{cancellation}</div>
        <div className="unique">{uniquetrait}</div>
        <div className="reviews">
          {reviews ? `Reviews are generally ${reviews}` : ""}
        </div>
        <div className="cured">
          {cured
            ? `Previously-existing but cured condition coverage is ${cured}`
            : ""}
        </div>
        <div className="death-coverage">
          {death ? "Death costs are covered" : ""}
        </div>
        <div className="deductable">
          {quote
            ? `My monthly quote for best bang-for-buck coverage was ${quote}`
            : ""}
        </div>
        <div className="fee">
          {fee ? `${fee} signup fee` : ""}
        </div>
        <div className="reimbursement">
          {rerate !== "fixed"
            ? `${rerate} reimbursement with a max annual payout of ${remax} after a ${deductable} deductable`
            : `Reimbursement rate is fixed per each specific diagnosis, after a ${deductable} deductable`}
        </div>
        {dental ? (
          <img className="dental-img" src={dentalimg} alt="dental coverage" />
        ) : (
          ""
        )}

        {food ? (
          <img
            className="food-img"
            src={foodimg}
            alt="prescription food coverage"
          />
        ) : (
          ""
        )}
      </figure>
    </>
  );
};


export default ItemDetail;
