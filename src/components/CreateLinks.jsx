import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import svg from "../utils/svg";
import { links } from "../utils/routes";

function CreateLinks({ options, title, created }) {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {created ? (
        <div className="flex btns-create justify-center align-center">
          <Button
            onClick={() => navigate(links.accounts.list(created))}
            className="btn-submit btn-outline"
            title={`Go to ${created[0].toUpperCase()}${created.slice(
              1
            )} Accounts`}
          />
          <Button
            svg={svg.send}
            onClick={() => setIsOpened(!isOpened)}
            className="btn-submit"
            title="Create Another Account"
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="create-btn flex align-center"
        >
          <div className="ico flex justify-center align-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2112_16729)">
                <path
                  d="M12 1.99997C6.48 1.99997 2 6.47997 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.47997 17.52 1.99997 12 1.99997ZM12 4.99997C13.66 4.99997 15 6.33997 15 7.99997C15 9.65997 13.66 11 12 11C10.34 11 9 9.65997 9 7.99997C9 6.33997 10.34 4.99997 12 4.99997ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                  fill="#FFFFFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_2112_16729">
                  <rect width="24" height="24" fill="#FFFFFF" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="q f600">{title}</h2>
          <svg
            className={`chv transitioned ${isOpened ? "opened" : ""}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2112_16730)">
              <path
                d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
                fill="#FFFFFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2112_16730">
                <rect width="24" height="24" fill="#FFFFFF" />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
      <div className="flex align-center links-create">
        {options.map(({ title, to }, idx) => (
          <Link
            key={idx}
            className={`link-create transitioned f400 t-default flex justify-center align-center ${
              isOpened ? "opened" : ""
            }`}
            to={to}
          >
            {isOpened && title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CreateLinks;
