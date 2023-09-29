import { Link } from "react-router-dom";

function Links({ links }) {
  return (
    <div className="links flex">
      {links.map(({ title, to }, idx) => (
        <Link
          className="card t-default f400 hover flex justify-center align-center"
          to={to}
          key={idx}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
