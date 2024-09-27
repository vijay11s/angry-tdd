import "./styles.css";
import { chartData } from "./data";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import XAxis from "./components/XAxis";
import { useState } from "react";
import Filters from "./components/Filters";

export default function App() {
  const isProfitableSession =
    chartData[0].price < chartData[chartData.length - 1].price;

  const [activeFilter, setActiveFilter] = useState("DAY");

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
          width={500}
          height={300}
          series={[
            {
              data: chartData.map((item) => item.price),
              showMark: false,
            },
          ]}
        />
      </div>
      <XAxis data={chartData} />
      <Filters
        activeFilter={activeFilter}
        changeFilter={(filter) => setActiveFilter(filter)}
      />
    </div>
  );
}
