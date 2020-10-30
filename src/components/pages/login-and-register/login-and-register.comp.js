import React from "react";
import FormInput from "../../utils/form-input/form-input.comp";

// Styles
import "./login-and-register.styles.scss";

const UserAccount = () => {
  return (
    <div className="container user-registeration-page" autoComplete="off">
      <div className="content-wrapper">
        <div className="row">
          <h3 className="mr-bottom-20">Create Account</h3>
          <form>
            <FormInput
              htmlForLabel="displayName"
              labelText="Display Name"
              type="text"
              name="displayName"
            />
            <FormInput htmlForLabel="email" labelText="Email" type="email" name="email" />
            <FormInput
              htmlForLabel="password"
              labelText="Password"
              type="password"
              name="password"
            />
            <FormInput
              htmlForLabel="confirmPassword"
              labelText="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <button type="submit">create account</button>
          </form>
        </div>

        <div className="sign-in-form">
          <h3 className="mr-bottom-20">Sign in</h3>
          <form>
            <FormInput htmlForLabel="email" labelText="Email" type="email" name="email" />
            <FormInput
              htmlForLabel="password"
              labelText="Password"
              type="password"
              name="password"
            />

            <div className="btn-group">
              <button>sign in</button>
              <button>sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
