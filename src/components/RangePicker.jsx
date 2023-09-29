import React, { useState } from "react";
import moment from "moment";

import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function RangePicker({
  loading,
  filterOptions,
  filterInitialValue,
  onClick = () => {},
  ButtonTitle = "Refresh",
}) {
  const formatDate = (date = new Date()) => {
    return moment(date).format("YYYY-MM-DD");
  };
  const start = new Date().setMonth(0, 1);
  const [endDate, setEndDate] = useState(formatDate());
  const [startDate, setStartDate] = useState(formatDate(start));
  const [filter, setFilter] = useState(filterInitialValue);

  return (
    <div className="flex range-picker justify-evenly">
      <Input
        placeholder="From"
        type={"date"}
        style={{ padding: 10, fontSize: 14 }}
        value={startDate}
        onChange={setStartDate}
      />
      <Input
        placeholder="To"
        type={"date"}
        style={{ padding: 10, fontSize: 14 }}
        value={endDate}
        onChange={setEndDate}
      />

      {filterOptions && (
        <Select
          placeholder="Filter By"
          initialValue={filter}
          options={filterOptions}
          onSelect={setFilter}
        />
      )}
      <Button
        loading={loading}
        disabled={loading}
        title={ButtonTitle}
        onClick={() => onClick(startDate, endDate, filter)}
        className={"p-20"}
      />
    </div>
  );
}
