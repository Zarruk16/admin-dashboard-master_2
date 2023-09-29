import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../../../utils/func";
import { adminProfileSchema } from "../../../validators/accounts";
import { Form, FormInput, Submit } from "../../form";
import ImagePicker from "../../ImagePicker";
import TabNavigator from "../../navigation/TabNavigator";

function ViewAdminAccount(props) {
  const {
    state: { data },
  } = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const Header = () => {
    return (
      <div className="user-profile-head flex align-center">
        <img
          crossOrigin="anonymous"
          src={
            data.profileImage
              ? getImageUrl(data.profileImage)
              : "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg?w=768"
          }
          alt={data.firstName}
        />
        <div>
          <span className="f500 flex">{`${data.firstName} ${data.lastName}`}</span>
          <br />
          {/* <br />
            <span className="f400 t-grey-2 ">CTO</span>
            <span className="flex f600 t-blue ">DTSID12345678</span> */}
          <span className={`status ${data.isActive}`}>
            {data.isActive ? "ACTIVE" : "NOT ACTIVE"}
          </span>
        </div>
      </div>
    );
  };

  const AdminPersonalInformation = () => {
    return (
      <div>
        <Form
          validationSchema={adminProfileSchema}
          onSubmit={(v) => {
            console.log(v);
          }}
          initialValues={{
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            createdAt: data.createdAt.split("T")[0],
            updatedAt: data.updatedAt.split("T")[0],
          }}
        >
          <span className="f700 t-blue tb-regular">Admin Personal Details</span>
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
          <div className="inputs">
            <FormInput
              name="createdAt"
              placeholder="Date Joined"
              type={"date"}
              readOnly={true}
            />
            <FormInput
              name="updatedAt"
              placeholder="Date Updated"
              type={"date"}
              readOnly={true}
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

  const Designation = () => {
    return (
      <div>
        <Form
          initialValues={{ staffId: "", staffPosition: "" }}
          onSubmit={() => {}}
        >
          <div className="inputs">
            <FormInput name={"staffId"} placeholder={"Staff ID"} />
            <FormInput
              name={"staffPosition"}
              placeholder={"Staff Position/Rank"}
            />
          </div>
          <Submit
            loading={isLoading}
            className="btn-submit"
            title="Save and Update"
          />
        </Form>
      </div>
    );
  };

  const LoginDetails = () => {
    return (
      <div>
        <Form initialValues={{ adminID: "", password: "" }} onSubmit={() => {}}>
          <div className="inputs">
            <FormInput name={"admin iD"} placeholder={"Admin ID"} />
            <FormInput name={"password"} placeholder={"Admin Password"} />
          </div>
          <Submit
            loading={isLoading}
            className="btn-submit"
            title="Save and Update"
          />
        </Form>
      </div>
    );
  };

  const tabs = [
    {
      tabName: "Admin's Details",
      component: AdminPersonalInformation,
    },
    {
      tabName: "Designation",
      component: Designation,
    },
    {
      tabName: "Login Details",
      component: LoginDetails,
    },
  ];
  return (
    <div>
      <h2>View Admin Account</h2>
      <div className="user-profile">
        <Header />
        <TabNavigator tabs={tabs} />
      </div>
    </div>
  );
}

export default ViewAdminAccount;
