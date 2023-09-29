import useLocations from "../../hooks/api/useLocations";
import Table from "../../components/table/Table";
import { useEffect } from "react";
import svg from "../../utils/svg";
import CreateLinks from "../../components/CreateLinks";
import { links } from "../../utils/routes";
import { models } from "../../utils/vars";
import useBusinesses from "../../hooks/api/useBusinesses";
import { useNavigate } from "react-router-dom";
import AccountPreview from "../../components/AccountPreview";

const Card = ({ title, value }) => (
  <div className="card acct-info flex justify-center align-center flex-column">
    <span className="q f400 t-default">{title}</span>
    <br />
    <h2 className="ttitle montserrat t-blue f600">{value}</h2>
  </div>
);

function IcartsAndLocations(props) {
  const { getCount, getLocation, count, locations } = useLocations();
  const { kioskCount, getKiosks, kiosks } = useBusinesses();
  const navigate = useNavigate();
  useEffect(() => {
    getCount();
    getLocation();
    getKiosks();
    // eslint-disable-next-line
  }, []);

  const icarthead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "ID",
      target: "id",
    },
    {
      title: "Location",
      target: "location",
      render: (l) => (l ? `${l.label}` : ""),
    },
    {
      title: "Current Owner",
      target: [
        "currentOwner.profileImage",
        "currentOwner.firstName",
        "currentOwner.lastName",
      ],
      render: (value) => (
        <AccountPreview
          user={{
            profileImage: value[0],
            firstName: value[1],
            lastName: value[2],
          }}
        />
      ),
    },
    {
      title: "Is Active",
      target: "active",
      render: (value) => (
        <span className={`status ${value}`}>
          {value.toString().toUpperCase()}
        </span>
      ),
    },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            navigate(links.icartsAndLocations.view(models.kiosk, id), {
              state: { data: kiosks.filter((k) => k._id === id)[0] },
            })
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  const locationshead = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Label",
      target: "label",
    },
    {
      title: "City",
      target: "city.name",
    },
    {
      title: "Country",
      target: "city.country",
    },
    {
      title: "Latitude",
      target: "coords.lat",
    },
    {
      title: "Longitude",
      target: "coords.lng",
    },
    {
      title: "Status",
      target: "status",
      render: (value) => (
        <span className={`status ${value}`}>{value.toUpperCase()}</span>
      ),
    },
    {
      title: "Actions",
      target: "_id",
      render: (id) => (
        <button
          className="action flex align-center"
          onClick={() =>
            navigate(links.icartsAndLocations.view(models.location, id), {
              state: { data: locations.filter((a) => a._id === id)[0] },
            })
          }
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between align-center gap-3">
        <Card title="Kiosks" value={kioskCount} />
        <Card title="Locations" value={count} />
      </div>
      <br />
      <br />
      <CreateLinks
        title="Add Data"
        options={[
          {
            title: "Kiosk",
            to: links.icartsAndLocations.add(models.kiosk),
          },
          {
            title: "Location",
            to: links.icartsAndLocations.add(models.location),
          },
        ]}
      />
      <br />
      <br />
      <Table
        title="Kiosk"
        btn={{
          title: "View all",
          className: "btn-view",
          onClick: () =>
            navigate(links.icartsAndLocations.list(models.kiosk), {
              state: { data: kiosks },
            }),
        }}
        head={icarthead}
        data={kiosks}
      />
      <br />
      <br />
      <Table
        title="Locations"
        btn={{
          title: "View all",
          className: "btn-view",

          onClick: () =>
            navigate(links.icartsAndLocations.list(models.location), {
              state: { data: locations },
            }),
        }}
        head={locationshead}
        data={locations}
      />
    </div>
  );
}

export default IcartsAndLocations;
