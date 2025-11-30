import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth") === "true";
  return isAuth ? <Navigate to="/" replace /> : children
};