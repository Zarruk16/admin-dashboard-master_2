import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import { getImageUrl } from "../utils/func";
import Image from "./Image";

function ImagePicker({
  name,
  loading,
  initial,
  onSelect,
  placeholder = "Select Image",
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const imgRef = useRef(null);
  const selectFile = (e) => {
    setSelectedFile(e.target.files[0]);
    if (typeof onSelect === "function") onSelect(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.addEventListener("load", (ev) => {
        imgRef.current.setAttribute("src", ev.target.result);
      });
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);
  return (
    <label
      htmlFor={name}
      className="image-picker shadow-hover flex flex-column"
    >
      {loading ? (
        <Loader className="img-loader" loading />
      ) : selectedFile ? (
        // eslint-disable-next-line
        <img src="" ref={imgRef} alt="Image" />
      ) : initial ? (
        // eslint-disable-next-line
        <Image src={initial} alt="Uploaded Image" />
      ) : (
        <>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_53_85939)">
              <path
                d="M24.5001 26.6654H5.83341V7.9987H17.8334V5.33203H5.83341C4.36675 5.33203 3.16675 6.53203 3.16675 7.9987V26.6654C3.16675 28.132 4.36675 29.332 5.83341 29.332H24.5001C25.9667 29.332 27.1667 28.132 27.1667 26.6654V14.6654H24.5001V26.6654ZM14.1134 22.4387L11.5001 19.292L7.83342 23.9987H22.5001L17.7801 17.7187L14.1134 22.4387ZM27.1667 5.33203V1.33203H24.5001V5.33203H20.5001C20.5134 5.34536 20.5001 7.9987 20.5001 7.9987H24.5001V11.9854C24.5134 11.9987 27.1667 11.9854 27.1667 11.9854V7.9987H31.1667V5.33203H27.1667Z"
                fill="#BBBFC7"
              />
            </g>
            <defs>
              <clipPath id="clip0_53_85939">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>{placeholder}</span>
        </>
      )}
      <input
        onChange={selectFile}
        accept="image/*"
        type="file"
        name={name}
        id={name}
      />
    </label>
  );
}

export default ImagePicker;
