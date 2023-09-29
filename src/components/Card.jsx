function Card({ className = "", renderSvg, value, title, inc }) {
  return (
    <div
      className={`card flex flex-column shadow hover preview-card ${className}`}
    >
      <div className="flex align-baseline">
        <div
          className={`icon flex justify-center align-center ${
            inc > 0 ? "up" : "down"
          }`}
        >
          {renderSvg()}
        </div>
        <span className="t-default f400 sub-title">{title}</span>
      </div>
      <div className="flex value align-center">
        <h2 className="f600 montserrat t-default1">{value}</h2>
      </div>
      <span className={`inc ${inc > 0 ? "up" : "down"}`}>
        <span className="f700">
          ({inc > 0 && "+"}
          {inc}%)
        </span>{" "}
        {inc >= 1 ? "Increase" : "Decrease"}
      </span>
    </div>
  );
}

export default Card;
