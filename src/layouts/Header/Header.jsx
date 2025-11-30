import classes from "./header.module.css"
import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.png"
import profileUrl from "../../assets/profile.png"

export const Header = () => {

  return (
    <header
      className={classes.wrapper}
    >
      <Link to="/">
        <img
          src={logoUrl}
          alt="Логотип X5"
        />
      </Link>

      <nav className={classes.wrapperNav}>
        <Link className={classes.link} to="/">Главная</Link>
        <Link className={classes.link} to="/events">Все мероприятия</Link>
      </nav>

      <Link to="/profile">
        <img
          src={profileUrl}
          alt="Иконка профиля"
        />
      </Link>
    </header>
  )
}