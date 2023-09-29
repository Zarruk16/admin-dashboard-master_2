import AppContext from "../contexts/AppContext";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../utils/func";
import { useContext } from "react";
import svg from "../utils/svg";
import "../css/header.css";
import Back from "./Back";

function Header(props) {
  const { user } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <header className="container flex align-center">
      {pathname !== "/" && <Back />}
      <h2 className="f700 t-blue">Dashboard</h2>
      <div className="user-info align-center card flex justify-between">
        <div className="bell flex justify-center align-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 18.2071V18.5H4.5V18.2071L6.35355 16.3536L6.5 16.2071V16V11C6.5 8.09437 8.02219 5.78092 10.6153 5.16653L11 5.07538V4.68V4C11 3.44614 11.4461 3 12 3C12.5539 3 13 3.44614 13 4V4.68V5.07506L13.3843 5.16644C15.9681 5.78076 17.5 8.10482 17.5 11V16V16.2071L17.6464 16.3536L19.5 18.2071ZM13.4135 20.5C13.2061 21.0806 12.6488 21.5 12 21.5C11.3443 21.5 10.7907 21.0813 10.5854 20.5H13.4135Z"
              fill="white"
              stroke="#BCBCC4"
            />
            <circle cx="17" cy="6" r="4.5" fill="#FF0202" stroke="white" />
          </svg>
        </div>
        <div className="info">
          <h2 className="f600 t-default">
            {user.firstName} {user.lastName}
          </h2>
          <span className="f500 t-default">
            {user.isSuper ? "Super admin" : "Admin"}
          </span>
        </div>
        {user.profileImage ? (
          <img
            alt={`${user.firstName} ${user.lastName}`}
            crossOrigin="anonymous"
            src={getImageUrl(user.profileImage)}
          />
        ) : (
          svg.profileSm()
        )}
      </div>
    </header>
  );
}

export default Header;
