import classes from "./UniversityInfo.module.css";
import {useParams} from "react-router-dom";
import {useUniversityInfo} from "../../utils/useUniversityInfo";
import {useStandsInfo} from "../../utils/useStandsInfo";

export const UniversityInfo = () => {
  const { id } = useParams()
  const { universities } = useUniversityInfo()
  const { stands } = useStandsInfo()

  const standsCount = stands.length

  const universityRender = universities.find((uni) => uni.id.toString() === id)

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.h2}>Основная информация о мероприятии</h2>
      <span>Площадка: {universityRender.NameUniversity}</span>
      <span>Количество стендов: {standsCount}</span>
    </div>
  )
}