import { useEffect, useRef, useState } from "react";
import { getNumber } from "../../utils/func";
import { chartTypes, months } from "../../utils/vars";
import AppChart from "../charts/AppChart";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "This month",
      borderColor: "#f7941d",
      borderWidth: 2,
      data: labels.map(() => (Math.random() * 1000).toFixed(0)),
    },
    {
      label: "Last month",
      borderColor: "#9C9C9D",
      borderWidth: 2,
      data: labels.map(() => (Math.random() * 1000).toFixed(0)),
    },
  ],
};

const Card = ({ title, value }) => (
  <div className="flex justify-center align-center flex-column">
    <span className="t-default f400">{title}</span>
    <h2 className="t-blue f700 montserrat">{value}</h2>
  </div>
);

function SalesTrend(props) {
  const [width, setWidth] = useState(null);
  const conatiner = useRef(null);

  useEffect(() => {
    const handleResize = (e) => setWidth(conatiner.current.clientWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="card flex sales-card">
      <div className="sales-chart flex flex-column">
        <div className="desc flex">
          <div>
            <h2 className="t-blue f700 ttitle">This Months Sales Trends</h2>
            <span className="t-default f600">
              as of {getNumber(new Date().getDate())}{" "}
              {months[new Date().getMonth()]} {new Date().getFullYear()}
            </span>
            <div className="flex">
              <div className="sales-type flex align-center">
                <div></div>
                <span className="f500">This Month</span>
              </div>
              <div className="sales-type flex align-center">
                <div></div>
                <span className="f500">Last Month</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="graph" ref={conatiner}>
          <AppChart width={width} data={data} type={chartTypes.line} />
        </div>
      </div>
      <div className="sales-cards">
        <Card value={(Math.random() * 100).toFixed(0)} title="iCart Bought" />
        <Card
          value={(Math.random() * 100).toFixed(0)}
          title="Location Change"
        />
        <Card
          value={(Math.random() * 100).toFixed(0)}
          title="Payment Reuqest"
        />
        <Card
          value={(Math.random() * 100).toFixed(0)}
          title="Disbursed Payment"
        />
        <Card
          value={(Math.random() * 100).toFixed(0)}
          title="Pending Approval"
        />
      </div>
    </div>
  );
}

export default SalesTrend;
