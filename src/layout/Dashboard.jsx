import { NavLink, Outlet } from "react-router-dom";
import ToastBox from "../components/Toast/ToastBox";

const Dashboard = () => {
  const route = [
    { path: "/dashboard", label: "dashboard" },
    { path: "/dashboard/all-products", label: "all products" },
    { path: "/dashboard/add-product", label: "add product" },
    { path: "/", label: "home" },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-10">
        {/* Page content here */}
        <Outlet />
        <ToastBox />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex flex-col gap-2 p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {route.map((item) => (
            <li className="capitalize" key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active text-yellow-500 bg-transparent" : "default"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
