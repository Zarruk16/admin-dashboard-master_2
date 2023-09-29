import { acctTypes } from "../../../utils/vars";
import { useNavigate } from "react-router-dom";
import { links } from "../../../utils/routes";
import Table from "../../table/Table";
import svg from "../../../utils/svg";
import AccountPreview from "../../AccountPreview";

function Dispatchers({ initialLimit }) {
  const navigate = useNavigate();

  const head = [
    {
      title: "#",
      target: "#",
      className: "count",
    },
    {
      title: "Dispatchers Name",
      target: ["imageUrl", "firstName", "lastName"],
      render: (value) => (
        <AccountPreview
          user={{
            imageUrl: value[0],
            firstName: value[1],
            lastName: value[2],
          }}
        />
      ),
    },
    
    {
      title: "Location",
      target: "location",
    },
    {
      title: "Dispatcher ID",
      target: "id",
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
      target: "id",
      render: (id) => (
        <button
          onClick={() =>
            navigate(links.accounts.view(acctTypes.operator, id), {
              state: { data: data.filter((a) => a.id == id)[0] },
            })
          }
          className="action flex align-center"
        >
          {svg.eye()} <span className="f700">VIEW</span>
        </button>
      ),
    },
  ];

  const data = [
    // {
    //   firstName: "Ismail",
    //   lastName: "Dalhatu",
    //   id: "OPR001",
    //   status: "active",
    //   profileImage: "http://algorizmih.com/img/Ismail.png",
    //   location: "Wuse 2 Abuja, Nigeria",
    //   icart: "icart001",
    //   isActive: "active",
    //   createdAt: new Date().toISOString(),
    //   updatedAt: new Date().toISOString(),
    //   email: "test@gmail.com",
    //   phoneNumber: "08012345679",
    //   gender: "Male",
    //   iCartType: "I-Noodles",
    // },
  ];

  return (
    <div>
      <Table
        btn={
          initialLimit && {
            title: "View All",
            className: "btn-view",
            onClick: () => navigate(links.accounts.list(acctTypes.operator)),
          }
        }
        data={data}
        head={head}
        title="Dispatchers"
      />
    </div>
  );
}

export default Dispatchers;
