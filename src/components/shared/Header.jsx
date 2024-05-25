import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const { user, logout } = useAuth();

  const navItem = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  const authItem = [
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  const navMenu = navItem.map(({ path, label }) => (
    <li key={label} className="mx-1">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active p-2" : "default p-2")}
      >
        {label}
      </NavLink>
    </li>
  ));

  const authMenu = authItem.map(({ path, label }) => (
    <li key={label} className="mx-1">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active p-2" : "default p-2")}
      >
        {label}
      </NavLink>
    </li>
  ));

  const handledLogout = () => {
    logout()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="w-full bg-transparent">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
              {authMenu}
            </ul>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          {!user ? (
            <ul className="menu menu-horizontal px-1">{authMenu}</ul>
          ) : (
            <div className="flex flex-row-reverse items-center gap-2">
              <div className="avatar online ">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>

              <Link
                onClick={handledLogout}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
