import ImagePicker from "../ImagePicker";
import { Form, FormInput, Submit } from "../form";
import FormSelect from "../form/FormSelect";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { userSchema } from "../../validators/accounts";
import useAccounts from "../../hooks/api/useAccounts";
import urls from "../../api/urls";
import { excludeFromObject, selectFromObject } from "../../utils/func";
import { useFormikContext } from "formik";

function CreateUserAccount(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [states, setStates] = useState([]);
  const [account, setAccount] = useState(null);

  const setAccountType = (e) => {
    // console.log(e);
  };

  const accountTypes = [
    {
      id: 1,
      name: "User",
    },
    {
      id: 2,
      name: "Operator",
    },
    {
      id: 3,
      name: "Staff",
    },
  ];
  const Departments = [
    {
      id: 1,
      name: "IT",
    },
  ];
  const { addAccount, isLoading } = useAccounts({ url: urls.admin.accounts });

  return (
    <div>
      <Form
        validationSchema={userSchema}
        onSubmit={(v) =>
          addAccount(
            {
              ...excludeFromObject(
                [
                  "password2",
                  "country",
                  "city",
                  "state",
                  "zip",
                  "street",
                  "accountType",
                  "department",
                ],
                v
              ),
              address: selectFromObject(
                ["country", "zip", "state", "city", "street"],
                v
              ),
            },
            selectedImage
          )
        }
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
          phoneNumber: "",
          nin: "",
          country: "",
          city: "",
          zip: "",
          street: "",
          state: "",
          accountType: "",
          department: "",
        }}
      >
        <span className="f700 t-blue tb-regular">User Personal Details</span>
        <br />
        <br />
        <div className="inputs">
          <FormInput name="firstName" placeholder="First Name" />
          <FormInput name="lastName" placeholder="Last Name" />
        </div>
        <div className="inputs">
          <FormInput name="email" type="email" placeholder="Email" />
          <FormInput name="phoneNumber" placeholder="Phone Number" />
        </div>
        <FormInput name="nin" placeholder="NIN" />
        <ImagePicker
          onSelect={setSelectedImage}
          placeholder="Upload Profile Image"
        />
        <br />
        <span className="f700 t-blue tb-regular">Create Login Details</span>
        <br />
        <br />
        <div className="inputs">
          <FormInput isPassword name="password" placeholder="Password" />
          <FormInput
            isPassword
            name="password2"
            placeholder="Confirm Password"
          />
        </div>
        <br />
        <span className="f700 t-blue tb-regular">Address</span>
        <br />
        <br />
        <div className="inputs">
          <FormSelect
            placeholder="Country"
            options={Object.values(Country.getAllCountries()).map((c) => ({
              value: c.name,
              label: c.name,
            }))}
            name="country"
          />
          <FormInput name="zip" placeholder="Zip Code" />
        </div>
        <div className="inputs">
          <FormSelect
            placeholder="State"
            options={states}
            onDependentChange={(v) => {
              const c = Object.values(Country.getAllCountries()).find(
                (c) => c.name === v
              );
              if (!c) return;
              setStates(
                State.getStatesOfCountry(c.isoCode).map((s) => ({
                  label: s.name,
                  value: s.name,
                }))
              );
            }}
            name="state"
            dependent="country"
          />
          <FormInput name="city" placeholder="City" />
        </div>
        <FormInput name="street" placeholder="Street" />
        <span className="f700 t-blue tb-regular">Account Type</span>
        <br />
        <br />
        <div className="inputs">
          <FormSelect
            placeholder="Account Type"
            options={Object.values(accountTypes).map((c) => ({
              value: c.name,
              label: c.name,
            }))}
            name="accountType"
            initialValue={"User"}
            onChangeListener={setAccountType}
          />
          {/* {accountType == "staff" && ( */}
          <FormSelect
            // dependent="accountType"
            // onDependentChange={setAccountType}
            placeholder="Department"
            options={Object.values(Departments).map((c) => ({
              value: c.name,
              label: c.name,
            }))}
            name="department"
          />
          {/* )} */}
        </div>
        <Submit
          loading={isLoading}
          className="btn-submit "
          title="Create Account"
        />
      </Form>
    </div>
  );
}

export default CreateUserAccount;
