import React from "react";
import "./Register.css";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="container-forms">
        <div className="form-container">
          <div className="container-inside">
            <div className="register-form">
              <div className="register-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/Microsoft_Teams_(6).png`}
                  alt="Gambar"
                />
              </div>
              <div className="register-text">
                <h1>
                  <b>Happening now</b>
                </h1>
                <h2>
                  <b>Join Student Teams today.</b>
                </h2>
              </div>
              <div className="signUp-form">
                <div className="signUp-google">
                  <button onClick={() => history.push("/home")}>
                    <b>Sign up with Google</b>
                  </button>
                </div>

                <div className="signUp-apple">
                  <button onClick={() => history.push("/home")}>
                    <b>Sign up with Apple</b>
                  </button>
                </div>

                <div className="signUp-phoneEmail">
                  <button onClick={() => history.push("/home")}>
                    <b>Sign up with phone or email</b>
                  </button>
                </div>
                <div className="form-term">
                  <p>
                    By signing up, you agree to the Terms of Service and Privacy
                    Policy, including Cookie Use.
                  </p>
                </div>
                <div className="form-account">
                  <p>
                    Already have an account?<a> Sign in</a>
                  </p>
                </div>
              </div>
              {/* rgb(83, 100, 113) */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-image">
        <img src={`${process.env.PUBLIC_URL}/e-learning-for-the-future.jpg`} />
      </div>
    </div>
  );
};

export default Register;
