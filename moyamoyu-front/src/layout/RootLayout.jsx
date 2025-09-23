import { Outlet } from "react-router-dom";
import { AppHeader, AppFooter } from "@/components/common";

export default function RootLayout() {
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
