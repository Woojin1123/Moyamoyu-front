import { Outlet } from "react-router";
import { AppHeader } from "@/components/common";

export default function AuthLayout() {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
