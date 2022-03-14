import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const ListItem = ({
  title,
  uniquetrait,
  deductable,
  rerate,
  remax,
  logo,
  id
}) => (
  <div className="item-container">
    <h2 className="title">{title}</h2>
    <Link to={`/${id}`}>
    <img src={logo} className="logo" alt={title} />
    </Link>
    <div className="uniquetrait">{uniquetrait ? `${uniquetrait}` : ""}</div>
    <div className="reimbursement">
      {rerate !== "fixed"
        ? `${rerate} reimbursement with a max annual payout of ${remax} after a ${deductable} deductable`
        : `Reimbursement rate is fixed per each specific diagnosis, after a ${deductable} deductable`}
    </div>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
  deductable: PropTypes.string,
  uniquetrait: PropTypes.string,
  rerate: PropTypes.string,
  remax: PropTypes.string,
};

export default ListItem;
