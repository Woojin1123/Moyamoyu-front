import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "@/config/axiosConfig";
import CategoryBadge from "@/components/ui/CategoryBadge";
import favoriteIcon from "@/assets/favorite.png";
import useAuthStore from "@/store/authStore";

export default function MoimDetailPage() {
  const { id } = useParams();
  const [moim, setMoim] = useState("");
  const { isLoggedIn } = useAuthStore();
  const { reason, setReason } = useState("");

  const handleFavorite = () => {
    return null;
  };

  const handleJoinMoim = async () => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스 입니다.");
      return null;
    }
    try {
      const response = await axios.post(`/moims/${id}/join-request`, {
        message: reason,
      });
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    return;
  };

  useEffect(() => {
    const fetchMoim = async () => {
      try {
        const response = await axios.get(`/moims/${id}`);
        setMoim(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoim();
  }, []);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center flex-grow p-4 border rounded-md">
        {/*커버이미지 */}
        <div className="w-full">
          <img
            src={moim.coverImgUrl}
            className="object-contain w-full rounded-md"
          />
        </div>
        <div className="flex w-full">
          {/* 카테고리 */}
          <div className="flex m-2 gap-2">
            <CategoryBadge label={moim.category} />
          </div>
        </div>
        {/* 모임 제목 */}
        <h4 className="w-full text-left text-3xl font-bold ">{moim.name}</h4>
        {/* 설명 텍스트 */}
        <div className="w-full min-h-[60vh] text-left text-xl border rounded-md mt-10 whitespace-pre-line">
          {moim.description}
        </div>
      </div>
      <div className="w-1/6 p-4">
        <div className="sticky flex flex-col top-50 bottom-50 gap-2">
          {/* 헤더 높이만큼 띄움 */}
          <button
            onClick={handleJoinMoim}
            className="p-3 !bg-lime-200/20 !border-none text-black rounded-md shadow-lg"
          >
            참가신청
          </button>
          <button
            onClikc={handleFavorite}
            className="object-contain !bg-white !border-none mx-auto"
          >
            <img src={favoriteIcon} alt="좋아요" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
