import { useState } from "react";
import { Form, FormInput, Submit } from "../form";
import ImagePicker from "../ImagePicker";
import useAccounts from "../../hooks/api/useAccounts";
import urls from "../../api/urls";
import { adminSchema } from "../../validators/accounts";
import { excludeFromObject } from "../../utils/func";
import CheckBox from "../CheckBox";

function CreateAdminAccount(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSuper, setIsSuper] = useState(false);
  const { addAccount, isLoading } = useAccounts({ url: urls.admin.profile });

  return (
    <div>
      <Form
        onSubmit={(v) =>
          addAccount(
            { ...excludeFromObject(["password2"], v), isSuper },
            selectedImage
          )
        }
        validationSchema={adminSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
          phoneNumber: "",
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
        <div className="label-check flex align-center">
          <CheckBox onChange={setIsSuper} />
          <span className="f700 t-blue">Is Super</span>
        </div>
        <br />
        <Submit
          loading={isLoading}
          className="btn-submit"
          title="Create Account"
        />
      </Form>
    </div>
  );
}

export default CreateAdminAccount;
