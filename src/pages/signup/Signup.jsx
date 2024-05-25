import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/login/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import FacebookLogin from "../../components/login/FacebookLogin";
import useAllUsers from "../../hooks/useAllUsers";
import axios from "axios";

const Signup = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const allUser = useAllUsers();

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPassMatched, setIsPassMatched] = useState(true);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confPassword = form.conf_pass.value;

    const emailIsValid = validateEmail(email);
    setIsValidEmail(emailIsValid);

    const passwordsMatch = password === confPassword;
    setIsPassMatched(passwordsMatch);

    if (emailIsValid && passwordsMatch) {
      createUser(email, password)
        .then((res) => {
          const createNewUser = res.user;
          // console.log(createNewUser);

          const { displayName, email, photoURL } = createNewUser;
          const isUserExist = allUser.some((user) => user.email === email);
          if (!isUserExist) {
            const id = allUser.length + 1;
            const newUserData = {
              id: id.toString(),
              displayName,
              email,
              photoURL,
            };
            axios.post("http://localhost:3000/users", newUserData);
          }

          form.reset();
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered"
                    required
                  />
                  {!isValidEmail && (
                    <p className="text-red-500 mt-2">Invalid email address</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input input-bordered"
                    required
                  />

                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input
                    name="conf_pass"
                    type="password"
                    className="input input-bordered"
                    required
                  />
                  {!isPassMatched && (
                    <p className="text-red-500 mt-2">
                      Confirm password didn&apos;t match!
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                    <label className="signup">
                      <Link
                        to="/login"
                        className="label-text-alt link link-hover"
                      >
                        Login now
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <GoogleLogin />
              <FacebookLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
