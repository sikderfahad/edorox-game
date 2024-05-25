import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../../components/login/GoogleLogin";
import { useState } from "react";
import FacebookLogin from "../../components/login/FacebookLogin";
const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from;

  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const emailIsValid = validateEmail(email);
    setIsValidEmail(emailIsValid);

    if (emailIsValid) {
      loginUser(email, password)
        .then((res) => {
          const newLoginUser = res.user;
          // console.log(newLoginUser);
          navigate(from ? from : "/");
          // console.log(from);
          form.reset();
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="">
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
                  <div className="flex items-center justify-between">
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                    <label className="signup">
                      <Link
                        to="/signup"
                        className="label-text-alt link link-hover"
                      >
                        Signup now
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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

export default Login;
