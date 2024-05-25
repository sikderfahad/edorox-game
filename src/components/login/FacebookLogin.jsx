import logo from "../../assets/img/facebook.png";
import useAuth from "../../hooks/useAuth";
const FacebookLogin = () => {
  const { facebookUser } = useAuth();

  const handledFacebookUser = () => {
    facebookUser()
      .then((res) => {
        const signedUser = res.user;
        // console.log(signedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <button
        onClick={handledFacebookUser}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-3 bg-transparent border border-gray-500 text-white font-semibold rounded-lg shadow-md  focus:outline-none"
      >
        <img className="w-6" src={logo} alt="" />
        <span>Login with Facebook</span>
      </button>
    </>
  );
};

export default FacebookLogin;
