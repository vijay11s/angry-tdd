import { useEffect, useState } from "react";
import moment from "moment";

function XAxis({ dataset, activeFilter, screenSize }) {
  const [axisData, setAxisData] = useState([]);

  function generateXAxis(data, activeFilter, screenSize) {
    let xAxisData = [];
    let numPoints;
    let timeStyle = null;
    if (activeFilter === "DAY") {
      timeStyle = "hh:mm A";
    } else if (activeFilter === "5_YEAR") {
      timeStyle = "YYYY";
    } else if (activeFilter === "YEAR") {
      timeStyle = "DD MMM YY";
    } else {
      timeStyle = "DD MMM";
    }
    if (screenSize === "large") {
      numPoints = 5;
    } else if (screenSize === "medium") {
      numPoints = 3;
    } else {
      numPoints = 2;
    }
    const interval = Math.floor(data.length / numPoints);
    for (let i = 0; i < data.length; i += interval) {
      xAxisData.push(moment(data[i].timestamp).format(timeStyle));
      if (xAxisData.length === numPoints) break;
    }
    return xAxisData;
  }

  useEffect(() => {
    const newAxisData = generateXAxis(dataset, activeFilter, screenSize);
    setAxisData(newAxisData);
  }, [dataset, screenSize]);

  return (
    <div className="x-axis">
      {axisData.map((axis) => (
        <p>{axis}</p>
      ))}
    </div>
  );
}

export default XAxis;
