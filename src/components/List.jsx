import React from "react";
import ListItem from "./ListItem";
// import PropTypes from 'prop-types';
import "../styles/List.css";
import { Link } from "react-router-dom";

const List = ({ items }) => {
  return (
    <div>
      <div className="main-container">
        <ul aria-label="item-ul" className="item-ul">
          {items.map((item) => (
            <li className="item-li" key={item.id}>
              <Link to={`/${item.id}`}>
                <ListItem {...item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const itemsProp = PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     website: PropTypes.string,
//     logo: PropTypes.string,
//     quote: PropTypes.string,
//     death_coverage: PropTypes.bool,
//     cured_condition_eligible: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.bool
//     ]),
//     signup_fee: PropTypes.string,
//     deductable: PropTypes.string,
//     unique: PropTypes.string,
//     reviews: PropTypes.string,
//     cancellation: PropTypes.string,
//     reimbursement_rate: PropTypes.string,
//     reimbursement_max: PropTypes.string,
//     dental: PropTypes.bool,
//     food: PropTypes.bool
//   })
// );

//   List.propTypes = {
//   items: itemsProp
// };


export default List;