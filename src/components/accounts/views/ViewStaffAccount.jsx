import { Country, State } from "country-state-city";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../../../utils/func";
import { userProfileSchema } from "../../../validators/accounts";
import { Form, FormInput, Submit } from "../../form";
import FormSelect from "../../form/FormSelect";
import ImagePicker from "../../ImagePicker";
import TabNavigator from "../../navigation/TabNavigator";
function ViewStaffAccount(props) {
  const {
    state: { data },
  } = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [user, setuser] = useState(data);

  const userPersonalInformation = () => {
    return (
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
            gender: user.gender,
            department: user.department,
            id: user.id,
          }}
        >
          {/* <span className="f700 t-blue tb-regular">
              User Personal Details
            </span> */}
          <br />
          <br />
          <div className="inputs">
            <FormInput
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
            />
          </div>
          <div className="inputs">
            <FormInput name="email" type="email" placeholder="Email" />
            <FormInput name="phoneNumber" placeholder="Phone Number" />
          </div>
          <div className="inputs">
            <FormInput name="id" placeholder="Staff Id" value={user.id} />
            <FormInput name="department" placeholder="Department" />
          </div>
          <div className="inputs">
            <FormSelect
              placeholder="Gender"
              options={[{ name: "Male" }, { name: "Female" }].map((c) => ({
                value: c.name,
                label: c.name,
              }))}
              name="gender"
            />
            <FormInput
              name="appointmentDate"
              placeholder="Date of Appointment"
              value={new Date().toISOString().split("T")[0]}
              type="date"
            />
          </div>
          <ImagePicker
            onSelect={setSelectedImage}
            placeholder="Upload Profile Image"
          />
          <Submit
            loading={isLoading}
            className="btn-submit"
            title="Save and Update"
          />
        </Form>
      </div>
    );
  };
  return (
    <div>
      <h2>View Staff Account</h2>
      <div className="user-profile">
        <div className="user-profile-head flex align-center">
          <img
            crossOrigin="anonymous"
            src={
              data.profileImage
                ? getImageUrl(data.profileImage)
                : "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg?w=768"
            }
            alt={user.firstName}
          />
          <div>
            <span className="f500 flex">{`${user.firstName} ${user.lastName}`}</span>
            <br />
            {/* <br />
            <span className="f400 t-grey-2 ">CTO</span>*/}
            <span className="flex f600 t-blue ">{user.id}</span>
            <span className={`status ${user.status === "active"}`}>
              {user.status === "active" ? "ACTIVE" : "NOT ACTIVE"}
            </span>
          </div>
        </div>
        <TabNavigator
          tabs={[
            {
              tabName: "Staff Details",
              component: userPersonalInformation,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ViewStaffAccount;
