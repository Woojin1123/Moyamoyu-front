import axios from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!isVerified) {
      alert("인증을 완료해주세요.");
      return;
    }
    try {
      const response = await axios.post("/auth/signup", {
        email,
        password,
        nickname,
        role: "USER",
        roadAddress: address,
        detailAddress,
        zipcode: zipCode,
      });
      if (response.status === 200) {
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendVerifyCode = async () => {
    if (!code) {
      console.log(code);
      alert("코드를 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post("/auth/email-verifications/confirm", {
        email,
        token: code,
      });
      if (response.status === 200) {
        setIsVerified(true);
      } else {
        console.log("인증 실패 : ", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendVerifyEmail = async () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post("/auth/email-verifications", {
        email,
      });
      if (response.status === 200) {
        setCountdown(60);
      } else {
        console.log("메일 발송 실패 :", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   다음 주소 입력 창 불러오기
  const loadDaumPostcode = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src =
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };
  //   주소 찾기 버튼 클릭 시 실행
  const handleAddressClick = async () => {
    if (!window.daum) await loadDaumPostcode();
    new window.daum.Postcode({
      oncomplete: function (data) {
        setAddress(data.roadAddress);
        setZipCode(data.zonecode);
      },
    }).open();
  };
  useEffect(() => {
    if (countdown === 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-9">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">회원가입</h2>
          </div>

          <div className="space-y-6">
            {/* 이메일 입력 */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              이메일
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={sendVerifyEmail}
                disabled={countdown > 0} // Count가 0되기전까지 비활성화
                className={`px-4 py-3 rounded-lg font-medium  ${
                  countdown > 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-black hover:bg-blue-700"
                }`}
              >
                {countdown > 0 ? `재발송 ${countdown}s` : "Send-Email"}
              </button>
            </div>
            {/* 이메일 인증 번호 입력 */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              인증번호
            </label>
            <div className="flex flex-row gap-2">
              <input
                type="code"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="6자리 인증번호를 입력하세요"
                disabled={isVerified}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
              <button
                onClick={sendVerifyCode}
                className={`flex-1 px-4 py-3 rounded-lg font-medium ${
                  isVerified
                    ? "bg-green-500 text-balck cursor-not-allowed"
                    : "bg-blue-600 text-black"
                }`}
                disabled={isVerified} // 인증 완료 후 버튼 비활성화
              >
                {isVerified ? "✔" : "Verify"}
              </button>
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
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
                pattern=""
              />
            </div>
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                닉네임
              </label>
              <input
                type="nickname"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              주소
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="address"
                value={address}
                placeholder="도로명 주소"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                readOnly
                required
              />
              <button type="button" onClick={handleAddressClick}>
                주소 찾기
              </button>
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                name="zipCode"
                value={zipCode}
                placeholder="우편번호"
                className="flex-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                readOnly
              />
              <input
                type="detailAddress"
                id="detailAddress"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                placeholder="상세 주소를 입력하세요(선택사항)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* 회원가입 버튼 */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-black font-semibold"
              onClick={handleSignUp}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
