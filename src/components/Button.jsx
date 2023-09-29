import "../css/components.css";

function Button({
  className = "",
  loading,
  svg,
  title,
  width = "100%",
  style = {},
  ...props
}) {
  return (
    <button
      {...props}
      className={`btn f700 flex align-center tregular ${className}`}
      style={{ ...style, width }}
    >
      {loading ? "Loading..." : title} {svg && svg()}
    </button>
  );
}

export default Button;
