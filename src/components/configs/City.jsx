import { Country, State } from "country-state-city";
import { citySchema } from "../../validators/operations";
import { Form, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import { useState } from "react";
import useOperations from "../../hooks/api/useOperations";

function City(props) {
  const [cities, setCities] = useState([]);
  const { addCity, isLoading } = useOperations();
  return (
    <div>
      <br />
      <Form
        initialValues={{ country: "", name: "" }}
        validationSchema={citySchema}
        onSubmit={addCity}
      >
        <FormSelect
          placeholder="Country"
          options={Object.values(Country.getAllCountries()).map((c) => ({
            value: c.name,
            label: c.name,
          }))}
          name="country"
        />
        <FormSelect
          placeholder="City"
          options={cities}
          onDependentChange={(v) => {
            const c = Object.values(Country.getAllCountries()).find(
              (c) => c.name === v
            );
            if (!c) return;
            setCities(
              State.getStatesOfCountry(c.isoCode).map((s) => ({
                label: s.name,
                value: s.name,
              }))
            );
          }}
          name="name"
          dependent="country"
        />
        <Submit loading={isLoading} className="btn-submit" title="Submit" />
      </Form>
    </div>
  );
}

export default City;
