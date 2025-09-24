import axios from "@/config/axiosConfig";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";


function AppHeader() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (error) {
      console.log("로그아웃 실패", error.response.data.message);
    }
    logout();
    window.location.href("/");
  };

  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#ADD8E6]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5 ">
          <div className="font-semibold text-black">내 모임</div>
          <span className="text-gray-400">|</span>
          <div className="font-semibold text-black">모임 찾아보기</div>
        </div>
        {/* 로그인 UI */}
        {isLoggedIn ? (
          <>
            <div className="flex gap-8">
              <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 cursor-pointer">
                마이페이지
              </div>
              <span className="text-gray-400">|</span>
              <div
                onClick={handleLogout}
                className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 cursor-pointer"
              >
                로그아웃
              </div>
            </div>
          </>
        ) : (
          <div
            onClick={() => navigate("/sign-in")}
            className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 cursor-pointer"
          >
            로그인
          </div>
        )}
      </div>
    </header>
  );
}

export { AppHeader };
