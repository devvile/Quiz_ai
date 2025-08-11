import { Outlet } from "react-router";
import Menu from "../shared/Menu";
import { Container } from "@mui/material";

const RootLayout = () => {
  return (
    <>
      <Menu />
      <Container component={"main"}>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
