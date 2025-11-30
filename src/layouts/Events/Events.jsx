import classes from "./Events.module.css";
import {Stands} from "../../components/Stands/Stands";
import {Outlet} from "react-router-dom";
import mainPhotoUrl from "../../assets/main-photo.png"

export const Events = (props) => {

  return (
    <section className={classes.wrapper}>
      <img
        className={classes.image}
        src={mainPhotoUrl}
        alt="main-photo"
      />
      <Outlet />
      <Stands />
    </section>)
}