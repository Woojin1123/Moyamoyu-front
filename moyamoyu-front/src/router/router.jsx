import { Routes, Route } from "react-router-dom";
import App from "@/pages/index.jsx"; // 메인페이지
import SignIn from "@/pages/auth/SignInPage"; // 로그인 페이지
import SignUp from "@/pages/auth/SignUpPage"; // 회원가입 페이지
import RootLayout from "@/layout/RootLayout";
import AuthLayout from "@/layout/AuthLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
