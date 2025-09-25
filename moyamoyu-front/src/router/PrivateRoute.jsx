import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/authStore";

export default function PrivateRoute() {
  const { isLoggedin } = useAuthStore();

  if (!isLoggedin) {
    return <Navigate to="/sign-in"></Navigate>;
  }
  return <Outlet />;
}
