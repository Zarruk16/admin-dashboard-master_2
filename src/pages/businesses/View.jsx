import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
// import CheckBox from "../../components/CheckBox";
// import Table from "../../components/table/Table";
import useBusinesses from "../../hooks/api/useBusinesses";
import { currencyFormatter, getImageUrl } from "../../utils/func";
// import { links } from "../../utils/routes";
// import svg from "../../utils/svg";
import { actions, conceptsAndMenus, } from "../../utils/vars";

export default function View() {
  const {
    state: { data },
  } = useLocation();
  const {
    updateSubscriptionStatus,
    updateSubscriptionConcept,
    isLoading,
    getKiosks,
    
    assignKiosk,
    getConcepts,
    concepts,
  } = useBusinesses();

  const navigate = useNavigate();

  const head = [
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
          onClick={() => {
            assignKiosk({ kiosk: id }, data._id, actions.add);
          }}
        >
          <span className="f700">ASSIGN</span>
        </button>
      ),
    },
  ];

  // const conceptsHead = [
  //   {
  //     title: "#",
  //     target: "#",
  //     className: "count",
  //   },
  //   {
  //     title: "Name",
  //     target: "name",
  //   },
  //   {
  //     title: "Actions",
  //     target: "_id",
  //     render: (id) => (
  //       <button
  //         className="action flex align-center"
  //         onClick={() => {
  //           updateSubscriptionConcept({ concept: id }, data._id, actions.add);
  //         }}
  //       >
  //         <span className="f700">ADD TO SUBSCRIPTION</span>
  //       </button>
  //     ),
  //   },
  //   {
  //     title: "Actions",
  //     target: "_id",
  //     render: (id) => (
  //       <button
  //         className="action flex align-center"
  //         onClick={() =>
  //           navigate(
  //             links.conceptsAndMenus.view(conceptsAndMenus.concept, id),
  //             {
  //               state: { data: concepts.filter((a) => a._id == id)[0] },
  //             }
  //           )
  //         }
  //       >
  //         {svg.eye()}
  //         <span className="f700">VIEW</span>
  //       </button>
  //     ),
  //   },
  // ];

  const [isActive, setIsActive] = useState(data.active);
  const removeConcept = (id) => {
    updateSubscriptionConcept({ concept: id }, data._id, actions.remove);
  };

  useEffect(() => {
    getKiosks(1, 100, true, false);
    getConcepts();
  }, []);

  return (
    <>
      <div>
        <h2>View Subscription</h2>
        <br />
        <div className="user-profile">
          <div className="user-profile-head flex align-center">
            <img
              crossOrigin="anonymous"
              src={
                data.user.profileImage
                  ? getImageUrl(data.user.profileImage)
                  : "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg?w=768"
              }
              alt={data.user.firstName}
            />
            <div>
              <h3 className="t-blue">{`${data.user.firstName} ${data.user.lastName} `}</h3>
              <span className="t-grey-3 f500">
                {data.user.email} | {data.user.phoneNumber}
              </span>
              <br />
              <span className={`status ${data.active}`}>
                {data.active ? "ACTIVE" : "NOT ACTIVE"}
              </span>
            </div>
          </div>
          <SubscriptionDetails data={data} />
          <TransactionDetails data={data} />
          
          {/* {concepts.length > 0 && (
            <ConceptDetails
              data={concepts}
              isActive={isActive}
              setIsActive={setIsActive}
              isLoading={isLoading}
              removeConcept={removeConcept}
            />
          )} */}

          <div className="flex" style={{ gap: 10 }}>
            <Button
              loading={isLoading}
              disabled={isLoading}
              className="btn-submit"
              title="Save and Update"
              onClick={() => {
                updateSubscriptionStatus({
                  subscription: data._id,
                  active: isActive ? true : false,
                });
              }}
            />
            {data.assignedKiosk && (
              <Button
                loading={isLoading}
                disabled={isLoading}
                style={{ backgroundColor: "#ff9800" }}
                className="btn-submit"
                title="Detatch"
                onClick={() =>
                  assignKiosk(
                    { kiosk: data.assignedKiosk._id },
                    data._id,
                    actions.remove
                  )
                }
              />
            )}
          </div>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", gap: 10 }}>
          {/* <Table
            style={{ flex: 0.6 }}
            showSearch={false}
            head={head}
            title="Kiosks"
            data={kiosks}
          />
          <Table
            style={{ flex: 1 }}
            showSearch={false}
            head={conceptsHead}
            title="Concepts"
            data={concepts}
          /> */}
        </div>
      </div>
    </>
  );
}

const SubscriptionDetails = ({ data }) => {
  return (
    <div>
      <span className="f700 t-blue tb-regular">Subscription Details</span>
      <br />
      <br />
      <div className="subscription">
        <div>
          <span className="t-blue f700">Management</span>
          <br />
          <span>{data.management}</span>
        </div>
        <div>
          <span className="t-blue f700">Duration</span>
          <br />
          <span>{data.type?.durationInDays ?? "--"} Days</span>
        </div>
        <div>
          <span className="t-danger f700">Expiry</span>
          <br />
          <span>{data.validTill.split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
};

const TransactionDetails = ({ data }) => {
  return (
    <div>
      <span className="f700 t-blue tb-regular">Transaction Details</span>
      <br />
      <br />
      <div className="subscription">
        <div>
          <span className="t-blue f700">Amount</span>
          <br />
          <span>{currencyFormatter(data.transaction.amount)}</span>
        </div>
        <div>
          <span className="t-blue f700">Status</span>
          <br />
          <span>{data.transaction.status}</span>
        </div>
        <div>
          <span className="t-blue f700">Transaction Date</span>
          <br />
          <span>{data.transaction.paidAt.split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
};

// const ICartDetails = ({ data, isActive, setIsActive }) => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     data.assignedKiosk?._id &&
//       navigate(links.icartsAndLocations.view(models.kiosk, data._id), {
//         state: { data: data.assignedKiosk },
//       });
//   };
  
// };

// const ConceptDetails = ({ data, isLoading, removeConcept }) => {
//   const navigate = useNavigate();
//   const handleView = (concept) =>
//     navigate(
//       links.conceptsAndMenus.view(conceptsAndMenus.concept, concept._id),
//       {
//         state: { data: concept },
//       }
//     );
 
// };
