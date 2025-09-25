import { Routes, Route } from "react-router-dom";
import App from "@/pages/index.jsx"; // 메인페이지
import SignIn from "@/pages/auth/SignInPage"; // 로그인 페이지
import SignUp from "@/pages/auth/SignUpPage"; // 회원가입 페이지
import RootLayout from "@/layout/RootLayout";
import AuthLayout from "@/layout/AuthLayout";
import MoimDetailPage from "@/pages/group/MoimDetailPage";
import ProfilePage from "@/pages/user/ProfilePage";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="/moims/detail/:id" element={<MoimDetailPage />} />
        {/* 로그인이 필요한 주소 */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
