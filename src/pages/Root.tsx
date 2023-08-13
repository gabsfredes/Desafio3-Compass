import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
