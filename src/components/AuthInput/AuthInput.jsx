export const AuthInput = (props) => {
  const {
    isAdmin
  } = props

  return (
    <input
      className="input"
      id={isAdmin ? "token" : "tg"}
      name={isAdmin ? "token" : "tg"}
      placeholder={isAdmin ? "Введите токен" : "Введите ваш ник телеграма"}
    />
  )
}