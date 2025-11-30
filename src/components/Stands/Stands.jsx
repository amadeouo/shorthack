import classes from './Stands.module.css';
import {StandsCard} from "../StandsCard/StandsCard";
import {Link, useParams} from "react-router-dom";
import {useUniversityInfo} from "../../utils/useUniversityInfo";
import {useStandsInfo} from "../../utils/useStandsInfo";
import {useLocation} from "react-router";

export const Stands = (props) => {
  const {
    isMain
  } = props

  const { universities } = useUniversityInfo()
  const { stands } = useStandsInfo()
  const { id } = useParams()
  const location = useLocation()

  const universitiesStandsArray = universities.find((uni) => uni.id.toString() === id)?.stands
  const filteredStandsArray = stands.filter(stand => universitiesStandsArray?.includes(stand.id))

  if (location.pathname === "/events") {
    return (
      <div className={classes.wrapper}>
        <h2 className={classes.h2}>{isMain ? "Университеты" : "Стенды"}</h2>
        <div className={classes.standsWrapper}>
          { stands.map((item, index) => (
            <StandsCard key={item.id} Name={item.StandName} Info={item.StandInfo} />
          ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.h2}>{isMain ? "Университеты" : "Стенды"}</h2>
      <div className={classes.standsWrapper}>
        {!isMain
          ? filteredStandsArray.map((item, index) => (
            <StandsCard key={item.id} Name={item.StandName} Info={item.StandInfo} />
        ))
         : universities.map((item, index) => (
           <Link to={`/events/${item.id}`} className={classes.link} key={item.id}>
            <StandsCard key={item.id} Name={item.NameUniversity} Info={item.NameUniversityInfo} isMain />
           </Link>
        ))
        }
      </div>
    </div>
  )
}