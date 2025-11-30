import classes from './StandsCard.module.css';
import {Button} from "../Button/Button";

export const StandsCard = (props) => {
  const {
    Name,
    Info,
    isMain,
  } = props

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.h3}>{Name}</h3>
      <span className={classes.info}>{Info}</span>
      {!isMain && (
        <div className={classes.buttons}>
          <Button className={classes.button} value="Аналитика" />
          <Button className={classes.buttonNone} value="Редактировать" />
        </div>
      )}
    </div>
  )
}