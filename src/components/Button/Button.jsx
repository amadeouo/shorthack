import classNames from "classnames";

export const Button = (props) => {
  const {
    className,
    value,
    onClick,
  } = props

  return (
    <button
      type="button"
      className={classNames(className, "button")}
      onClick={onClick}
    >
      {value}
    </button>
  )
}