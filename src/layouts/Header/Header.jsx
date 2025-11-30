import classes from "./header.module.css"
import { Link } from "react-router";

export const Header = () => {

  return (
    <header
      className={classes.wrapper}
    >
      <Link to="/">
        <img
          src="/logo.svg"
          alt="Логотип X5"
        />
      </Link>

      <nav className={classes.wrapperNav}>
        <Link className={classes.link} to="/">Главная</Link>
        <Link className={classes.link} to="/events">Все мероприятия</Link>
      </nav>

      <Link to="/profile">
        <img
          src="/profile.png"
          alt="Иконка профиля"
        />
      </Link>
    </header>
  )
}