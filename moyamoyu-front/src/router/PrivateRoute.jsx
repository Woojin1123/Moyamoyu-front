import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/authStore";

export default function PrivateRoute() {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace></Navigate>;
  }
  return <Outlet />;
}
