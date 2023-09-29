import { Country, State } from "country-state-city";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../../../utils/func";
import { userProfileSchema } from "../../../validators/accounts";
import CheckBox from "../../CheckBox";
import { Form, FormInput, Submit } from "../../form";
import FormSelect from "../../form/FormSelect";
import ImagePicker from "../../ImagePicker";

function ViewUserAccount() {
  const {
    state: { data },
  } = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [user, setuser] = useState(data);
  const [checked, setchecked] = useState(user.isActive);
  const updateState = () => {
    setchecked(!checked);
  };
  return (
    <div>
      <h2>View User Account</h2>
      <div className="user-profile">
        <div className="user-profile-head flex align-center">
          <img
            crossOrigin="anonymous"
            src={
              user.profileImage
                ? getImageUrl(user.profileImage)
                : "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg?w=768"
            }
            alt={user.firstName}
          />
          <div>
            <span className="f500 flex">{`${user.firstName} ${user.lastName}`}</span>
            <br />
            {/* <br />
            <span className="f400 t-grey-2 ">CTO</span>
            <span className="flex f600 t-blue ">DTSID12345678</span> */}
            <span className={`status ${user.isActive}`}>
              {user.isActive ? "ACTIVE" : "NOT ACTIVE"}
            </span>
          </div>
        </div>
        <div>
          <Form
            validationSchema={userProfileSchema}
            onSubmit={
              (v) => {
                console.log(v);
              }
              // addAccount(
              //   {
              //     ...excludeFromObject(
              //       ["password2", "country", "city", "state", "zip", "street"],
              //       v
              //     ),
              //     address: selectFromObject(
              //       ["country", "zip", "state", "city", "street"],
              //       v
              //     ),
              //   },
              //   selectedImage
              // )
            }
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phoneNumber: user.phoneNumber,
              nin: user.nin.value,
              country: user.address.country,
              city: user.address.city,
              zip: user.address.zip,
              street: user.address.street,
              state: user.address.state,
            }}
          >
            <span className="f700 t-blue tb-regular">
              User Personal Details
            </span>
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
            <ImagePicker
              onSelect={setSelectedImage}
              placeholder="Upload Profile Image"
            />
            <div className="flex">
              <label>Active</label>
              <CheckBox onChange={updateState} value={checked} />
              <br />
              <br />
            </div>
            <Submit
              loading={isLoading}
              className="btn-submit"
              title="Save and Update"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ViewUserAccount;
