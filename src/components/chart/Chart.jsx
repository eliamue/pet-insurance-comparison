import React from "react";
import Nav from "../Nav";
import { Container, Row, Col } from "react-grid-system";
import ChartItem from "./ChartItem";

export default function Chart({ items }) {
  return (
    <div className="full-chart">
      <Nav />
      <div className="chart-page">
        <Container className="chart-container">
        <header className="container-header">
          <h1 className="container-header">
            Coverage and Cost Comparison Chart
          </h1>
        </header>
          <Row className="headers-row">
            <Col id="title-header" className="chart-header">
              Company
            </Col>
            <Col id="food-header" className="chart-header">
              Rx Food
            </Col>
            <Col id="dental-header" className="chart-header">
              Dental
            </Col>
            <Col id="death-header" className="chart-header">
              Death Costs
            </Col>
            <Col id="cured-header" className="chart-header">
              Cured Condition Coverage
            </Col>
            <Col id="sign-fee-header" className="chart-header">
              Signup Fee
            </Col>
            <Col id="reratemax-header" className="chart-header">
              Max Annual Payout and Reimbursement Percentage
            </Col>
            <Col id="cancel-header" className="chart-header">
              Cancellation Policy
            </Col>
          </Row>
          <div className="chart-holder">
            {items.map((item) => (
              <Row className="chart-item-li" id={item.id} key={item.id}>
                <ChartItem {...item} />
              </Row>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
