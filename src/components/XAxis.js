import { useEffect, useState } from "react";

function XAxis({ data }) {
  const [axisData, setAxisData] = useState([]);

  useEffect(() => {
    const newAxisData = [];
    let currentIndex = 0;
    while (currentIndex < data.length) {
      console.log(currentIndex, "CURENT IN");
      const time = new Date(data[currentIndex].time);
      const hours = time.getHours();
      const minutes = time.getMinutes();
      newAxisData.push(`${hours}:${minutes}`);
      currentIndex += 20;
    }
    setAxisData(newAxisData);
  }, []);

  return (
    <div className="x-axis">
      {axisData.map((axis) => (
        <p>{axis}</p>
      ))}
    </div>
  );
}

export default XAxis;
