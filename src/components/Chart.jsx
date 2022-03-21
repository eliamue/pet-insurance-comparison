import React from "react";
import Nav from "./Nav";
import { Container, Row, Col } from "react-grid-system";
import ChartItem from "./ChartItem";

export default function Chart({ items }) {

  return (
    <div>
      <Nav />
      <header>
        <h1>Comparison Chart</h1>
      </header>
      <div>
        <Container className="chart-container">
          <Row className="headers-row">
            <Col className="chart-header">Company</Col>
            <Col className="chart-header">Death Costs Coverage</Col>
            <Col className="chart-header">Cured Coverage</Col>
            <Col className="chart-header">Prescription Food Coverage</Col>
            <Col className="chart-header">Signup Fee</Col>
            <Col className="chart-header">Highest Reimbursement Rate</Col>
            <Col className="chart-header">Highest Max Annual Payout</Col>
            <Col className="chart-header">Cancellation Policy</Col>
          </Row>
          {items.map((item) => (
            <Row className="chart-item-li" id={item.id} key={item.id}>
              <ChartItem {...item} />
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
}
