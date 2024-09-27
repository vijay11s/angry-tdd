import "./styles.css";
import { getChartData } from "./data";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import XAxis from "./components/XAxis";
import { useState, useLayoutEffect, useEffect } from "react";
import Filters from "./components/Filters";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("DAY");
  const [screenSize, setScreenSize] = useState("large");
  const [chartData, setChartData] = useState([]);

  const isProfitableSession =
    chartData?.[0]?.price < chartData?.[chartData.length - 1]?.price;

  useEffect(() => {
    const data = getChartData(activeFilter);
    setChartData(data);
  }, [activeFilter]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("small");
      } else if (width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    }
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  if (chartData.length === 0) return null;

  return (
    <div className="App">
      <div className="chart-container">
        <LineChart
          sx={{
            [`& .${lineElementClasses.root}`]: {
              stroke: isProfitableSession ? "green" : "red",
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: 0,
            },
            "& .MuiChartsAxis-bottom": {
              display: "none",
            },
            "& .MuiChartsAxis-left": {
              display: "none",
            },
          }}
          height={400}
          series={[
            {
              data: chartData.map((item) => item.price),
              showMark: false,
            },
          ]}
          yAxis={[
            {
              valueFormatter: (element) => `$${element}`,
            },
          ]}
        ></LineChart>
      </div>
      <XAxis
        dataset={chartData}
        activeFilter={activeFilter}
        screenSize={screenSize}
      />
      <Filters
        activeFilter={activeFilter}
        changeFilter={(filter) => setActiveFilter(filter)}
      />
    </div>
  );
}
