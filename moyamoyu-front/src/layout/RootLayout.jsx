import { Outlet } from "react-router-dom";
import { AppHeader, AppFooter } from "@/components/common";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function RootLayout() {
  const { refresh } = useAuthStore();
  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div className="page">
      <AppHeader />
      <div className="container mb-10">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}
