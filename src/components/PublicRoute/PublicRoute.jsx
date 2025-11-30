import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}) => {
  const isAuth = localStorage.getItem("isAuth") === "true"
  return !isAuth ? <Navigate to="/auth" /> : children
}