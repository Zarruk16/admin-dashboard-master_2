import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../../../utils/func";
import { adminProfileSchema } from "../../../validators/accounts";
import { Form, FormInput, Submit } from "../../form";
import ImagePicker from "../../ImagePicker";
import TabNavigator from "../../navigation/TabNavigator";
// import FormSelect from "../../form/FormSelect";

function ViewDispatcherAccount(props) {
  const {
    state: { data },
  } = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] =useState(false);

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
          <span className="f400 t-grey-2 ">{data.iCartType} Operator</span>
          <span className="flex f600 t-blue ">{data.icart}</span>
          <span className={`status ${data.isActive}`}>
            {data.isActive ? "ACTIVE" : "NOT ACTIVE"}
          </span>
        </div>
      </div>
    );
  };

  const DispatchersPersonalDetails = () => {
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
            createdAt: data.createdAt?.split("T")[0],
            updatedAt: data.updatedAt?.split("T")[0],
            gender: data.gender,
          }}
        >
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

  // const AssignedICart = () => {
  //   console.log(data);
  //   return (
  //     <div>
  //       {/* <Form
  //         initialValues={{
  //           icartNumber: data.icart,
  //           icartLocation: data.location,
  //           icartType: "",
  //         }}
  //         onSubmit={() => {}}
  //       >
  //         <div className="inputs">
  //           <FormInput name={"icartNumber"} placeholder={"I-Cart Number"} />
  //           <FormInput name={"icartLocation"} placeholder={"I-Cart Location"} />
  //         </div>
  //         <div className="inputs">
  //           <FormSelect
  //             placeholder="I-Cart Type"
  //             options={[{ name: "Type-1" }, { name: "Type-2" }].map((c) => ({
  //               value: c.name,
  //               label: c.name,
  //             }))}
  //             name="icartType"
  //           />
  //         </div>
  //         <Submit
  //           loading={isLoading}
  //           className="btn-submit"
  //           title="Save and Update"
  //         />
  //       </Form> */}
  //     </div>
  //   );
  // };

  const LoginDetails = () => {
    return (
      <div>
        <Form
          initialValues={{ operatorID: "", password: "" }}
          onSubmit={() => {}}
        >
          <div className="inputs">
            <FormInput name={"DispatcherID"} placeholder={"Dispatcher's ID Code"} />
            <FormInput name={"password"} placeholder={"Dispatcheer's Password"} />
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
      tabName: "Dispatcher's Personal Details",
      component: DispatchersPersonalDetails,
    },
    
    {
      tabName: "Login Details",
      component: LoginDetails,
    },
  ];
  return (
    <div>
      <h2>View Dispatcher Account</h2>
      <div className="user-profile">
        <Header />
        <TabNavigator tabs={tabs} />
      </div>
    </div>
  );
}

export default ViewDispatcherAccount;
