import { useEffect, useState } from "react";
import Input from "./Input";

function Select({ options = [], initialValue, loading, onSelect, ...props }) {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(null);
  const [render, setRender] = useState([]);

  const handleSearch = ({ target: { value } }) => {
    setRender(
      options.filter(
        (o) =>
          o.label.toLowerCase().includes(value.toLowerCase()) ||
          o.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setSelected(options.find((v) => v.value === initialValue) ?? null);
  }, [initialValue, options]);

  useEffect(() => {
    if (selected) {
      if (typeof onSelect === "function") onSelect(selected.value);
    }
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    setRender(options);
    // eslint-disable-next-line
  }, [options]);

  return (
    <div className="select">
      <Input
        {...props}
        value={selected?.label}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        select
      />
      {isOpened && (
        <div className="options">
          <input onChange={handleSearch} placeholder="Search" />
          {render.map((o, idx) => (
            <button
              key={idx}
              className={selected?.value === o.value ? "selected" : ""}
              onClick={() => {
                setSelected(o);
                setIsOpened(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
