import { AppSideBar } from "@/components/common";
import { useEffect, useState } from "react";
import axios from "@/config/axiosConfig";

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
      <div className="w-1/6 bg-gray-200">
        <AppSideBar />
      </div>
      <div className="flex-1 flex min-h-screen bg-lime-200">
        <div className="w-1/4">
          <img src={userInfo.profileImg} alt="@ProfileIMG"></img>
        </div>
        <div className="flex-1 grid grid-cols-4">
          <div className="col-span-2">
            <div>{userInfo.nickname}</div>
            <div>{userInfo.fullAddress}</div>
          </div>
          <div>{userInfo.createdAt}</div>
          <div>수정버튼</div>
        </div>
      </div>
    </div>
  );
}
