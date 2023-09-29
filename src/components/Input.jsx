import { useState, useEffect } from "react";

function Input({
  onFocus = () => {},
  onBlur = () => {},
  type = "text",
  isPassword = false,
  value = "",
  onChange = () => {},
  placeholder = "Placeholder",
  className = "",
  renderIcon,
  errorMessage,
  select,
  isOpened,
  setIsOpened,
  textClassName,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(isPassword);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  const handleBlur = () => {
    setIsFocus(false);
    onBlur();
  };
  const handleFocus = () => {
    if (inputValue) return;
    setIsFocus(true);
    onFocus();
  };
  const toggleHideShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <>
      <div
        onClick={() => {
          if (select) {
            if (isOpened) handleBlur();
            else handleFocus();
            setIsOpened(!isOpened);
          }
        }}
        className={`input_container ${
          (isFocus || inputValue) && "focus"
        } ${className} ${errorMessage ? "input_error" : ""}`}
      >
        <span className="text-primary">{placeholder}</span>
        <input
          // autocomplete={false}
          {...props}
          disabled={select}
          type={!showPassword ? type : "password"}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={textClassName}
        />
        {renderIcon && (
          <div className="flex justify-center align-center">{renderIcon()}</div>
        )}
        {isPassword && (
          <div
            className="flex justify-center align-center"
            onClick={toggleHideShowPassword}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 6.66671V5.00004C14.1667 2.70004 12.3 0.833374 10 0.833374C7.70004 0.833374 5.83337 2.70004 5.83337 5.00004V6.66671H3.33337V18.3334H16.6667V6.66671H14.1667ZM7.50004 5.00004C7.50004 3.61671 8.61671 2.50004 10 2.50004C11.3834 2.50004 12.5 3.61671 12.5 5.00004V6.66671H7.50004V5.00004ZM15 16.6667H5.00004V8.33337H15V16.6667ZM10 14.1667C10.9167 14.1667 11.6667 13.4167 11.6667 12.5C11.6667 11.5834 10.9167 10.8334 10 10.8334C9.08337 10.8334 8.33337 11.5834 8.33337 12.5C8.33337 13.4167 9.08337 14.1667 10 14.1667Z"
                fill="#f75050"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
