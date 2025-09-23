import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/index.css";
import App from "@/pages/index.jsx"; // 메인페이지
import SignIn from "@/pages/auth/SignInPage.jsx"; // 로그인 페이지
import SignUp from "@/pages/auth/SignUpPage.jsx"; // 회원가입 페이지
import RootLayout from "@/layout/RootLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
