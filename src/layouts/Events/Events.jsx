import classes from "./Events.module.css";
import {Stands} from "../../components/Stands/Stands";
import {Outlet} from "react-router-dom";

export const Events = (props) => {

  return (
    <section className={classes.wrapper}>
      <img
        className={classes.image}
        src="/main-photo.png"
        alt="main-photo"
      />
      <Outlet />
      <Stands />
    </section>)
}