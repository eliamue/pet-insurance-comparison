import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useOneItem } from "../../hooks/useOneItem";
import { HashLink } from 'react-router-hash-link';
import dentalimg from "../assets/dental.png";
import foodimg from "../assets/food.png";

const ItemDetail = () => {
  const { id } = useParams();
  const { loading, item } = useOneItem(id);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <figure className="item-container">
        <figcaption className="name">{item.title}</figcaption>
        <a href={item.website} alt={item.title}>
          <img src={item.logo} className="logo" alt={item.title} />
        </a>
        <div className="cancellation">{item.cancellation}</div>
        <div className="unique">{item.uniquetrait}</div>
        <div className="reviews">
          {item.reviews ? `Reviews are generally ${item.reviews}` : ""}
        </div>
        <div className="cured">
          {item.cured
            ? `Previously-existing but cured condition coverage is ${item.cured}`
            : ""}
        </div>
        <div className="death-coverage">
          {item.death ? "Death costs are covered" : ""}
        </div>
        <div className="deductable">
          {item.quote
            ? `My monthly quote for best bang-for-buck coverage was ${item.quote}`
            : ""}
        </div>
        <div className="fee">{item.fee ? `${item.fee} signup fee` : ""}</div>
        <div className="reimbursement">
          {item.rerate !== "fixed"
            ? `${item.rerate} reimbursement with a max annual payout of ${item.remax} after a ${item.deductable} deductable`
            : `Reimbursement rate is fixed per each specific diagnosis, after a ${item.deductable} deductable`}
        </div>
        <section className="food-dental-container">
          {item.dental ? (
            <div className="dental-covered">
              <img
                className="dental-img"
                src={dentalimg}
                alt="dental coverage"
              />
              Dental is covered
            </div>
          ) : (
            ""
          )}

          {item.food ? (
            <div className="rx-food">
              <img
                className="food-img"
                src={foodimg}
                alt="prescription food coverage"
              />
              Prescription food is covered
            </div>
          ) : (
            ""
          )}
        </section>
      </figure>
      <HashLink to={`/list/#${item.id}`}>
        Back to list
      </HashLink>
    </>
  );
};

export default ItemDetail;
