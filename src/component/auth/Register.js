import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Title from "../dom/Title";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorsMessage from "../errors/ValidationErrorsMessage";
import store from "../../store/Index";
import { connect } from "react-redux";
import { hcLogin } from "../../store/actions/AuthActions";
const validationSchema = Yup.object({
  name: Yup.string().required(),
  phoneNumber: Yup.number().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
const Register = (props) => {
  const handleClick = () => {
    console.log(props.auth);
  };
  return (
    <div>
      <Title headerTitle="Register  " />
      <section id="Register">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-3 register_left align-items-center">
            <h1 className="login-header">Register Now</h1>
            <p style={{ color: "#000" }}>Register To Access Your Dashboard</p>
            <Formik
              initialValues={{
                email: "",
                password: "",
                phoneNumber: "",
                name: "",
              }}
              onSubmit={(values) => {
                props.submitLogin(values);
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
                      placeholder="Enter Your Name"
                      name="name"
                      onChange={handleChange("name")}
                      onBlur={handleBlur("name")}
                    />
                    {touched.name && errors.name ? (
                      <ValidationErrorsMessage error={errors.name} />
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control auth_input"
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      placeholder="Enter Your Phone Number"
                    />
                    {touched.phoneNumber && errors.phoneNumber ? (
                      <ValidationErrorsMessage error={errors.phoneNumber} />
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control auth_input"
                      type="text"
                      name="email"
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Enter Your Email Address"
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
                  <button type="submit" className="btn btn-block mt-3 btn-auth">
                    SIGN UP
                  </button>
                </form>
              )}
            </Formik>
            <button type="button" onClick={handleClick}>
              Fetch User{" "}
            </button>
            <p className="mt-4 text-center">or Register with</p>
            {JSON.stringify(store.getState().auth)}
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
              Already have an account ?{" "}
              <span>
                <Link to="/login">Login now</Link>
              </span>
            </p>
            <p className="text-center">
              <Link to="/">
                <FaHome /> Back to Home
              </Link>
            </p>
          </div>
          <div className="col-md-9 register_right"></div>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProops = (dispatch) => {
  return {
    submitLogin: (values) => {
      dispatch(hcLogin(values));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProops)(Register);
