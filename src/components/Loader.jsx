import "../css/loader.css";

function Loader({ loading, className = "" }) {
  if (!loading) return null;
  return (
    <div id="loader" className={className}>
      <div id="ball-1" className="circle"></div>
      <div id="ball-2" className="circle"></div>
      <div id="ball-3" className="circle"></div>
    </div>
  );
}

export default Loader;
