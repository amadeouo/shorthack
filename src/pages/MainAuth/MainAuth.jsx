import styles from "./MainAuth.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const MainAuth = () => {
  const tokenValidation = "123"
  const [tokenInput, setTokenInput] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tokenInput === tokenValidation) {
      localStorage.setItem("isAuth", "true")
      navigate("/");
    } else {
      alert("Неправильный токен");
    }
  }

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="token"
        className={styles.label}
      >
        Введите токен
      </label>
      <input
        className={styles.input}
        id="token"
        name="token"
        type="password"
        onChange={e => setTokenInput(e.target.value)}
      />
    </form>
  )
}