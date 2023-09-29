const Card2 = ({ title, value }) => (
  <div className="card acct-info flex justify-center align-center flex-column">
    <span className="q f400 t-default">{title}</span>
    <br />
    <h2 className="ttitle montserrat t-default f600">{value}</h2>
  </div>
);

export default Card2;
