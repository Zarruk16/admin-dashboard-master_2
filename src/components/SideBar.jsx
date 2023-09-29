import "../css/sidebar.css";
import logo from "../assets/logo.png";
import { navLinks } from "../utils/route-links";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/api/useAuth";

function SideBar(props) {
  const [active, setActive] = useState(null);
  const { pathname } = useLocation();
  const { logout } = useAuth();

  useEffect(() => {
    setActive("/" + pathname.split("/")[1]);
  }, [pathname]);

  return (
    <nav className="inter">
      <div className="logo flex justify-center align-center">
        <img src={logo} alt="icart logo" />
      </div>
      {navLinks.map(({ to, renderSvg, title }, idx) => (
        <Link
          key={idx}
          className={`flex ${
            to === active ? "active" : ""
          } nav-link align-center`}
          to={to}
        >
          <div className="link-svg flex justify-center align-center">
            {renderSvg()}
          </div>
          <span className="f400 tregular t-default1">{title}</span>
        </Link>
      ))}
      <button
        onClick={logout}
        className={`flex logout-btn nav-link align-center`}
      >
        <div className="link-svg flex justify-center align-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8421 8.72727H5.10008V7.27273H10.8421V0.545455C10.8421 0.400791 10.797 0.262052 10.7168 0.15976C10.6365 0.0574673 10.5277 0 10.4142 0H0.427979C0.314472 0 0.205614 0.0574673 0.125352 0.15976C0.0450905 0.262052 0 0.400791 0 0.545455V15.4545C0 15.5992 0.0450905 15.7379 0.125352 15.8402C0.205614 15.9425 0.314472 16 0.427979 16H10.4142C10.5277 16 10.6365 15.9425 10.7168 15.8402C10.797 15.7379 10.8421 15.5992 10.8421 15.4545V8.72727ZM13.8155 8.72727L11.533 11.6364L12.3401 12.665L16 8L12.3401 3.335L11.533 4.36364L13.8155 7.27273H10.8421V8.72727H13.8155Z"
              fill="#fff"
            />
          </svg>
        </div>
        <span>Logout</span>
      </button>
    </nav>
  );
}

export default SideBar;
