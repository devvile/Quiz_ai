import { Outlet } from "react-router";
import Menu from "../shared/Menu";

const RootLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default RootLayout;
