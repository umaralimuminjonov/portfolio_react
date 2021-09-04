import React from "react";
import {
  UilQuestionCircle,
  UilMessage,
  UilArrowLeft,
} from "@iconscout/react-unicons";
import useForm from "./utils/useForm";
import validate from "./utils/validateInfo";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <main className="main">
      <section className="section login">
        <h1 className="section_title">Login</h1>
        <Link className="login_close" to="/">
          <UilArrowLeft className=" icon" />
        </Link>
        <div className="login_container container">
          <form onSubmit={handleSubmit} className="login_form grid" noValidate>
            <div className="login_inputs grid">
              <div
                className={`login_content ${errors.email && "login_invalid"}`}
              >
                <input
                  type="email"
                  className="login_input"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="email" className="login_label">
                  Email
                </label>
                <UilQuestionCircle className="login_alert-icon icon" />
                <div className="login_alert-text">
                  {errors.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div
                className={`login_content ${
                  errors.password && "login_invalid"
                }`}
              >
                <input
                  type="password"
                  className="login_input"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="password" className="login_label">
                  Password
                </label>
                <UilQuestionCircle className="login_alert-icon icon" />
                <div className="login_alert-text">
                  {errors.password && <p>{errors.password}</p>}
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn_flex">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
