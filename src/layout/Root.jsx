import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ToastBox from "../components/Toast/ToastBox";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastBox />
      <Footer />
    </>
  );
};

export default Root;
