import { AppSideBar } from "@/components/common";
import { useEffect, useState } from "react";
import axios from "@/config/axiosConfig";
import defaulProfile from "@/assets/defaultProfile.png";
import { EditProfileDialog } from "@/components/user";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/users/me");
        setUserInfo(response.data.data);
      } catch (error) {
        console.log("내 정보 호출 실패", error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div className="flex">
      <AppSideBar />

      <div className="flex-1 flex flex-col gap-5 min-h-screen ml-10">
        <div className="flex rounded-2xl bg-gray-100 shadow-md">
          {/* 프로필 이미지 */}
          <div className="w-1/4 p-5">
            <img
              src={userInfo.profileImg ? userInfo.profileImg : defaulProfile}
              className="w-full h-full rounded-full object-cover shadow-md"
            ></img>
          </div>
          {/* 닉네임 / 주소 / 수정버튼 */}
          <div className="flex-1 flex p-6">
            <div className="flex-1 rounded-2xl bg-white shadow-md">
              <div className="flex flex-col p-10 h-full gap-2">
                <div className="text-2xl">{userInfo.nickname}</div>
                <div>내 주소</div>
                <div className="text-lg">{userInfo.fullAddress}</div>
                <div>{userInfo.createdAt ? userInfo.createdAt : "없음"}</div>
                <div className="mt-3">
                  <EditProfileDialog userInfo={userInfo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl min-h-[20vh] rounded-2xl bg-gray-100 shadow-md p-4">
          <div className="text-xl min-h-[20vh] rounded-2xl bg-white shadow-md p-4">
            {userInfo.introduce
              ? userInfo.introduce
              : "소개글이 없습니다. 지금 자기소개를 입력해보세요"}
          </div>
        </div>
      </div>
    </div>
  );
}
