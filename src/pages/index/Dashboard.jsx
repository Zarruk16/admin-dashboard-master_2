import { useState } from "react";
import Card from "../../components/Card";
import Map from "../../components/map/Map";
import "../../css/dashboards.css";
import svg from "../../utils/svg";
import Dark from "../../components/map/Dark";
// import SalesTrend from "../../components/statistics/SalesTrend";
import DUserPreview from "../../components/DUserPreview";

const locations = [
  {
    lat: 9.0765,
    lng: 7.3986,
  },
  {
    lat: 9.0865,
    lng: 7.5986,
  },
  {
    lat: 9.0965,
    lng: 7.4986,
  },
  {
    lat: 9.0965,
    lng: 7.1986,
  },
  {
    lat: 9.0965,
    lng: 7.2986,
  },
  {
    lat: 9.1965,
    lng: 7.2986,
  },
  {
    lat: 9.1565,
    lng: 7.2986,
  },
  {
    lat: 9.1565,
    lng: 7.3986,
  },
  {
    lat: 9.1565,
    lng: 6.9986,
  },
  {
    lat: 9.1565,
    lng: 7.1986,
  },
  {
    lat: 9.2565,
    lng: 7.4986,
  },
  {
    lat: 9.0,
    lng: 7.4986,
  },
];

function Dashboard(props) {
  const [isMapDark, setIsMapDark] = useState(false);
  const [mapZoom, setMapZoom] = useState(10);

  const darkMap = () => setIsMapDark(true);
  const lightMap = () => setIsMapDark(false);
  const zoomUp = () => setMapZoom(mapZoom + 1);
  const zoomDown = () => setMapZoom(mapZoom - 1);

  return (
    <div>
      <div className="flex map-info justify-between">
        <div className="dashboard-map">
          {isMapDark ? (
            <Dark locations={locations} zoom={mapZoom} />
          ) : (
            <Map locations={locations} zoom={mapZoom} />
          )}
          <button
            onClick={darkMap}
            className="mode-dark f500 t-blue micon card shadow flex justify-center align-center"
          >
            Dark Mode
          </button>
          <button
            onClick={lightMap}
            className="mode-light f500 t-blue micon card shadow flex justify-center align-center"
          >
            Light Mode
          </button>
          <button className="full-screen micon card shadow flex justify-center align-center">
            {svg.scale()}
          </button>
          <button
            onClick={zoomUp}
            className="plus micon card shadow flex justify-center align-center"
          >
            {svg.plus()}
          </button>
          <button
            onClick={zoomDown}
            disabled={mapZoom <= 1}
            className="minus micon card shadow flex justify-center align-center"
          >
            {svg.minus()}
          </button>
        </div>
        <div className="dashboard-cards">
          <Card inc={0} value="0" renderSvg={svg.folder} />
          <Card inc={0} value="0" renderSvg={svg.trending} />
          <Card inc={0} value="0" renderSvg={svg.trending} />
        </div>
      </div>
      {/* <SalesTrend />  */}
      <DUserPreview />
    </div>
  );
}

export default Dashboard;
