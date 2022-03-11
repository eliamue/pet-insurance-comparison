import React from "react";
import { PropTypes } from "prop-types";

const ListItem = ({
  name,
  cured_condition_eligible,
  dental,
  food,
  unique,
  death_coverage,
  deductable,
  cancellation,
  reviews,
  reimbursement_rate,
  reimbursement_max,
  quote,
  signup_fee,
  website,
  logo,
}) => (
  <div className="item-container">
    <h2 className="name">{name}</h2>
    <a href={website} alt={name}>
      <img src={logo} className="logo" alt={name} />
    </a>
    <div className="cancellation">{cancellation}</div>
    <div className="unique">{unique}</div>
    <div className="reviews">
      {reviews ? `Reviews are generally ${reviews}` : ""}
    </div>
    <div className="cured">
      {cured_condition_eligible
        ? `Previously-existing but cured condition coverage is ${cured_condition_eligible}`
        : ""}
    </div>
    <div className="food">{food ? "Prescription food coverage" : ""}</div>
    <div className="dental">{dental ? "Dental coverage" : ""}</div>
    <div className="death_coverage">
      {death_coverage ? "Death costs are covered" : ""}
    </div>
    <div className="deductable">{ quote ? `My monthly quote for best bang-for-buck coverage was ${quote}` : ""}</div>
    <div className="fee">{ signup_fee ? `${signup_fee} signup fee` : ""}</div>
    <div className="reimbursement">
      {reimbursement_rate !== "fixed"
        ? `${reimbursement_rate} reimbursement with a max annual payout of ${reimbursement_max} after a ${deductable} deductable`
        : `Reimbursement rate is fixed per each specific diagnosis, after a ${deductable} deductable`}
    </div>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  cured_condition_eligible: PropTypes.string,
  unique: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
};

export default ListItem;
