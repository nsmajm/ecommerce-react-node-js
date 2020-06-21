import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Title from "../dom/Title";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorsMessage from "../errors/ValidationErrorsMessage";

const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
const Login = (props) => {
  return (
    <div>
      <Title headerTitle="Login" />
      <section id="login">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-3 login_left align-items-center">
            <h1 className="login-header">Log In</h1>
            <p style={{ color: "#000" }}>Login To Access Your Dashboard</p>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                if (values.email === "nsmajm@gmail.com") {
                  props.history.push("/");
                }
              }}
              validationSchema={validationSchema}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control auth_input"
                      type="text"
                      name="email"
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Enter Your Email"
                    />
                    {touched.email && errors.email ? (
                      <ValidationErrorsMessage error={errors.email} />
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control auth_input"
                      type="password"
                      name="password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      placeholder="Enter Your password"
                    />
                    {touched.password && errors.password ? (
                      <ValidationErrorsMessage error={errors.password} />
                    ) : null}
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="checkbox" className="checkbox-light" />
                        <label>
                          <span className="ml-2"> Remember Me</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Link to="/">Forget Password</Link>
                    </div>
                  </div>
                  <button className="btn btn-block mt-3 btn-auth">
                    LOG IN
                  </button>
                </form>
              )}
            </Formik>
            <p className="mt-4 text-center">or login with</p>

            <div className="social_login">
              <button className="btn btn-outline-secondary facebook_button social_auth_button">
                <FaFacebook />
              </button>
              <button className="btn btn-outline-secondary social_auth_button">
                <FaTwitter />
              </button>
              <button className="btn btn-outline-secondary social_auth_button">
                <FcGoogle />
              </button>
            </div>
            <p className="text-left mt-4">
              Don't have an account ?{" "}
              <span>
                <Link to="/register">Register now</Link>
              </span>
            </p>
            <p className="text-center">
              <Link to="/">
                <FaHome /> Back to Home
              </Link>
            </p>
          </div>
          <div className="col-md-9 login_right"></div>
        </div>
      </section>
    </div>
  );
};

export default Login;
