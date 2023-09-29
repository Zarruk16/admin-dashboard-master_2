import { useEffect, useState } from "react";

function CheckBox({ onChange, value }) {
  const [checked, setChecked] = useState(false);
  const toggleCheck = () => {
    if (typeof onChange === "function") onChange(!checked);
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <button
      onClick={toggleCheck}
      className={`check-box flex justify-center align-center `}
    >
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_82_3273)">
            <path
              d="M17.5 2.5H2.5V17.5H17.5V2.5ZM8.33333 14.1667L4.16667 10L5.34167 8.825L8.33333 11.8083L14.6583 5.48333L15.8333 6.66667L8.33333 14.1667Z"
              fill="#368FC3"
            />
          </g>
          <defs>
            <clipPath id="clip0_82_3273">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : null}
    </button>
  );
}

export default CheckBox;
