import { useNavigate } from "react-router-dom";

function Back(props) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2112_17845)">
          <path
            d="M26.6673 14.6667H10.4407L17.894 7.21334L16.0007 5.33334L5.33398 16L16.0007 26.6667L17.8807 24.7867L10.4407 17.3333H26.6673V14.6667Z"
            fill="#d61111"
          />
        </g>
        <defs>
          <clipPath id="clip0_2112_17845">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default Back;
