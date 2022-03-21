import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { PropTypes } from "prop-types";

    // const cancelPolicy = (cancellation) => {
    //     if(cancellation === "30-day money-back guarantee") 
    //     return <img className="thirty" src="https://www.desichristou.com/wp-content/uploads/2019/11/money-back-guarantee-30-days.png" alt="30-day money-back guarantee" />
    //     else if (cancellation === "14-day money-back guarantee") return <img className="fourteen" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1938804/settings_images/uzpvcMLTTfWpROhpsCUH_114_day_money_back_no_background.png" alt="14-day money-back guarantee" />
    //     else return ""
    // }

const ChartItem = ({
  title,
  death,
  cured,
  food,
  fee,
  rerate,
  remax,
  cancellation,
  id,
}) => (
  <div>
    <Row className="item-row">
      <Link id="item-title" className="item-col" to={`/${id}`}>
        <Col>{title}</Col>
      </Link>
      <Col id="item-death" className="item-col">{death ? "X" : ""}</Col>
      <Col id="item-cured" className="item-col">{cured === "unknown" || cured === "none" ? "" : cured}</Col>
      <Col id="item-food" className="item-col">{food ? "X" : ""}</Col>
      <Col id="item-fee" className="item-col">{fee === "No" ? "" : fee}</Col>
      <Col id="item-rerate" className="item-col">{rerate}</Col>
      <Col id="item-remax" className="item-col">{remax}</Col>
      <Col id="item-cancel" className="item-col">{cancellation}</Col>
    </Row>
  </div>
);

ChartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
  deductable: PropTypes.string,
  uniquetrait: PropTypes.string,
  rerate: PropTypes.string,
  remax: PropTypes.string,
};

export default ChartItem;
