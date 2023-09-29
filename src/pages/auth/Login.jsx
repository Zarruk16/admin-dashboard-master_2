import { FormInput, Submit, Form } from "../../components/form";
import { loginSchema } from "../../validators/auth";
import useAuth from "../../hooks/api/useAuth";
import "../../css/auth.css";

function Login(props) {
  const { login, isLoading } = useAuth();
  return (
    <div className="login-container raleway">
      <Form
        validationSchema={loginSchema}
        onSubmit={login}
        initialValues={{ email: "", password: "" }}
      >
        <div className="form-container flex justify-center align-center">
          <div className="card form">
            <FormInput name="email" placeholder="Email or ID" />
            <FormInput name="password" placeholder="Password" isPassword />
            <Submit
              disabled={isLoading}
              loading={isLoading}
              onClick={login}
              className="login-submit flex justify-center align-center"
              title="Login"
            />
          </div>
        </div>
        <div className="footer f400 flex justify-center align-center">
          Copyright © 2023 <span className="t-blue f700">Kafas Xpress Gas</span>. All
          rights reserved
        </div>
      </Form>
    </div>
  );
}

export default Login;
