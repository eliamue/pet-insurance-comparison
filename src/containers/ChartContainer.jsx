import React from "react";
import Chart from "../components/chart/Chart";
import { useAllItems } from '../hooks/useAllItems';
import "../styles/Chart.css";
import Nav from "../components/Nav";

const ChartContainer = () => {
  const { items } = useAllItems();

  return (
    <div>
      <header id="top">
        <Nav />
      </header>
      <Chart items={items} />
    </div>
  );
};
export default ChartContainer;
