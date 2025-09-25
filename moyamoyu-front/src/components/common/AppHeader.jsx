import axios from "@/config/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import logoImg from "@/assets/siteLogo.png";

function AppHeader() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthStore();
  const location = useLocation();

  const navMainPage = () => {
    navigate("/");
  };
  const navProfilePage = () => {
    navigate("/profile");
  };

  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (error) {
      console.log("로그아웃 실패", error.response.data.message);
    }
    logout();
    window.location.href("/");
  };
  if (isAuthPage) {
    return (
      <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-white opacity-100">
        <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
          <a href="/">
            <img
              src={logoImg}
              className="h-10 w-auto object-contain cursor-pointer"
            ></img>
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-white opacity-100">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5 ">
          <div onClick={navMainPage}>
            <img
              src={logoImg}
              className="h-10 w-auto object-contain cursor-pointer"
            ></img>
          </div>

          <div className="font-semibold text-black cursor-pointer hover:text-gray-300 duration-500">
            내 모임
          </div>
          <span className="text-gray-400">|</span>
          <div className="font-semibold text-black cursor-pointer hover:text-gray-300 duration-500">
            모임 찾아보기
          </div>
        </div>
        {/* 로그인 UI */}
        {isLoggedIn ? (
          <>
            <div className="flex gap-8">
              <div
                onClick={navProfilePage}
                className="font-semibold text-muted-foreground cursor-pointer hover:text-gray-300 duration-500"
              >
                마이페이지
              </div>
              <span className="text-gray-400">|</span>
              <div
                onClick={handleLogout}
                className="font-semibold text-muted-foreground cursor-pointer hover:text-gray-300 duration-500"
              >
                로그아웃
              </div>
            </div>
          </>
        ) : (
          <div
            onClick={() => navigate("/sign-in")}
            className="font-semibold text-muted-foreground cursor-pointer hover:text-gray-300 duration-500"
          >
            로그인
          </div>
        )}
      </div>
    </header>
  );
}

export { AppHeader };
