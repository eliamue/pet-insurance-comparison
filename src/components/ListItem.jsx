import React from "react";
import { PropTypes } from 'prop-types';

const ListItem = ({
  name,
  unique,
  deductable,
  reimbursement_rate,
  reimbursement_max,
  logo,
  id
}) => (
  <div className="item-container">
    <h2 className="name">{name}</h2>
    <img src={logo} className="logo" alt={name} />
    <div className="unique">{unique}</div>
    <div className="reimbursement">
      {reimbursement_rate !== "fixed"
        ? `${reimbursement_rate} reimbursement with a max annual payout of ${reimbursement_max} after a ${deductable} deductable`
        : `Reimbursement rate is fixed per each specific diagnosis, after a ${deductable} deductable`}
    </div>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  logo: PropTypes.string,
  deductable: PropTypes.string,
  unique: PropTypes.string,
  reimbursement_rate: PropTypes.string,
  reimbursement_max: PropTypes.string,
};

export default ListItem;
