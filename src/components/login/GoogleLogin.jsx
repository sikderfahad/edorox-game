import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/search (1).png";
import useAuth from "../../hooks/useAuth";
import useAllUsers from "../../hooks/useAllUsers";
import axios from "axios";

const GoogleLogin = () => {
  const { googleUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from;

  const allUser = useAllUsers();
  // console.log(allUser);

  const handledGoogleUser = () => {
    googleUser()
      .then((res) => {
        const signedUser = res.user;

        const { displayName, email, photoURL } = signedUser;
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

        // console.log(signedUser);
        navigate(from ? from : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button
        onClick={handledGoogleUser}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-3 bg-transparent border border-gray-500 text-white font-semibold rounded-lg shadow-md  focus:outline-none"
      >
        <img className="w-6" src={logo} alt="" />
        <span>Login with Google</span>
      </button>
    </>
  );
};

export default GoogleLogin;
