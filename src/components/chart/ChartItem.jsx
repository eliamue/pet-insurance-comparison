import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { PropTypes } from "prop-types";
import thirty from "../assets/thirty.png";
import fourteen from "../assets/fourteen.png";

const truthy = (
  <img
    className="checkmark"
    src="https://pngfreepic.com/wp-content/uploads/2021/03/tick-icon-png-freepic-2.png"
    alt="checkmark"
  />
);

const falsey = (
  <img
    className="checkmark"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png"
    alt="X mark"
  />
);

const ChartItem = ({
  title,
  death,
  cured,
  food,
  fee,
  rerate,
  remax,
  cancellation,
  dental,
  id,
}) => (
  <div>
    <Row className="item-row">
      <Link id="item-title" className="item-col" to={`/${id}`}>
        <Col>{title}</Col>
      </Link>
      <Col id="item-food" className="item-col">
        {food ? truthy : falsey}
      </Col>
      <Col id="item-dental" className="item-col">
        {dental ? truthy : falsey}
      </Col>
      <Col id="item-death" className="item-col">
        {death ? truthy : falsey}
      </Col>
      <Col id="item-cured" className="item-col">
        {(() => {
          if (cured === "none") {
            return <div>{falsey}</div>;
          } else if (cured === "unknown") {
            return <div>Unknown wait period</div>;
          } else if (cured === "immediate") {
            return <div>Immediately, no wait period</div>;
          } else {
            return <div>{cured + "-month wait period"}</div>;
          }
        })()}
      </Col>
      <Col id="item-fee" className="item-col">
        {fee === "No" ? "$0" : fee}
      </Col>
      <Col id="item-reratemax" className="item-col">
        {(() => {
          if (rerate === "") {
            return "";
          } else if (rerate === "fixed") {
            return (
              <div>
                Reimbursement rate and max determined by specific diagnoses
              </div>
            );
          } else {
            return <div>{rerate}, </div>;
          }
        })()}

        {(() => {
          if (remax === "") {
            return "";
          } else if (remax === "unlimited" || remax === "Unlimited") {
            return <div>unlimited max</div>;
          } else if (remax === "fixed") {
            return "";
          } else {
            return <div>{remax + " max"}</div>;
          }
        })()}
      </Col>
      <Col id="item-cancel" className="item-col">
        {(() => {
          if (cancellation === "30") {
            return (
              <img
                className="guarantee"
                src={thirty}
                alt="30-day money-back guarantee"
              />
            );
          } else if (cancellation === "14") {
            return (
              <img
                className="guarantee"
                src={fourteen}
                alt="14-day money-back guarantee"
              />
            );
          } else {
            return falsey;
          }
        })()}
      </Col>
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
