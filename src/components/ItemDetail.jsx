import React from "react";
import { PropTypes } from 'prop-types';
// import { useParams } from "react-router-dom";

import dentalimg from "./assets/dental.png";
import foodimg from "./assets/food.png";
// import { useOneItem } from "./services.js";

const ItemDetail = ({ item }) => 
// {
  // const { id } = useParams();
  // const { item } = useOneItem(id);
  // const {
  //   name,
  //   website,
  //   logo,
  //   quote,
  //   death_coverage,
  //   cured_condition_eligible,
  //   signup_fee,
  //   deductable,
  //   unique,
  //   reviews,
  //   cancellation,
  //   reimbursement_max,
  //   reimbursement_rate,
  //   dental,
  //   food,
  // } = item;

  // return 
  (
    <>
      <figure className="item-container">
        <figcaption className="name">{item.name}</figcaption>
        <a href={item.website} alt={item.name}>
          <img src={item.logo} className="logo" alt={item.name} />
        </a>
        <div className="cancellation">{item.cancellation}</div>
        <div className="unique">{item.unique}</div>
        <div className="reviews">
          {item.reviews ? `Reviews are generally ${item.reviews}` : ""}
        </div>
        <div className="cured">
          {item.cured_condition_eligible
            ? `Previously-existing but cured condition coverage is ${item.cured_condition_eligible}`
            : ""}
        </div>
        <div className="death_coverage">
          {item.death_coverage ? "Death costs are covered" : ""}
        </div>
        <div className="deductable">
          {item.quote
            ? `My monthly quote for best bang-for-buck coverage was ${item.quote}`
            : ""}
        </div>
        <div className="fee">
          {item.signup_fee ? `${item.signup_fee} signup fee` : ""}
        </div>
        <div className="reimbursement">
          {item.reimbursement_rate !== "fixed"
            ? `${item.reimbursement_rate} reimbursement with a max annual payout of ${item.reimbursement_max} after a ${item.deductable} deductable`
            : `Reimbursement rate is fixed per each specific diagnosis, after a ${item.deductable} deductable`}
        </div>
        {item.dental ? (
          <img className="dental-img" src={dentalimg} alt="dental coverage" />
        ) : (
          ""
        )}

        {item.food ? (
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
// };

ItemDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  quote: PropTypes.string,
  death_coverage: PropTypes.bool,
  cured_condition_eligible: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  signup_fee: PropTypes.string,
  deductable: PropTypes.string,
  unique: PropTypes.string,
  reviews: PropTypes.string,
  cancellation: PropTypes.string,
  reimbursement_rate: PropTypes.string,
  reimbursement_max: PropTypes.string,
  dental: PropTypes.bool,
  food: PropTypes.bool
};

export default ItemDetail;
