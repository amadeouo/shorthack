import {Header} from "../../layouts/Header/Header";
import {Footer} from "../../layouts/Footer/Footer";
import {Outlet} from "react-router-dom";
import {Events} from "../../layouts/Events/Events";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}