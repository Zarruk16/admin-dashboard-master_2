import "../../css/table.css";
import Button from "../Button";
import Input from "../Input";
import Row from "./Row";

function Table({
  title,
  head,
  data = [],
  btn,
  showSearch = true,
  onSearch,
  style,
}) {
  return (
    <div className="table card" style={style}>
      <div className="flex justify-between">
        <h2 className="t-blue f600 ttitle">{title}</h2>
        {showSearch && <Input placeholder="Search" onChange={onSearch} />}
      </div>
      <Row isHead cells={head} data />
      {data.map((d, idx) => (
        <Row cells={head} data={d} key={idx} didx={idx} />
      ))}
      <div className="table-footer flex justify-end">
        {btn && <Button {...btn} />}
      </div>
    </div>
  );
}

export default Table;
