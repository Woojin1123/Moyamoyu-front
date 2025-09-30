import { Outlet } from "react-router-dom";
import { AppHeader, AppFooter } from "@/components/common";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";


export default function RootLayout() {
  // 처음 RootLayout만들때만 실행되고 이후에는 RootLayout이 유지되므로 실행이안됨 추후 개선 필요
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
