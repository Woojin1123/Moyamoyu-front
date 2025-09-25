import axios from "@/config/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const postSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      const token = response.data.data;
      if (token) {
        console.log("로그인 성공 토큰 : ", response.data.data);
        login(token);
        navigate("/");
      } else {
        throw "토큰의 값이 없습니다.";
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "알 수 없는 오류가 발생했습니다.";

      alert(`로그인 실패: ${message}`);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">로그인</h2>
          </div>

          <div className="space-y-6">
            {/* 이메일 입력 */}
            <form onSubmit={postSignIn} className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  이메일
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* 비밀번호 입력 */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  비밀번호
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-black font-semibold"
              >
                로그인
              </button>
            </form>

            {/* 구분선 */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <button
              onClick={() => navigate("/sign-up")}
              type="button"
              className="w-full text-black font-semibold border-solid border-black border-[1px]"
            >
              회원가입
            </button>
          </div>

          {/* 소셜 로그인 버튼 */}
          <div className="mt-8">
            <div className="text-center text-sm text-gray-600 mb-4">
              소셜 계정으로 로그인
            </div>
            <div className="grid gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">Naver</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
