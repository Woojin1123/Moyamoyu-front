import personImg from "@/assets/person.png";
import categoryImg from "@/assets/category.png";
import failImg from "@/assets/failImg.png";

function GroupCard({ data }) {
  if (!data) {
    return (
      <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-4 animate-pulse">
        {/* 상단 이미지 */}
        <div className="w-full h-60 bg-gray-300 rounded mb-2"></div>

        {/* 사용자 아이콘 + 제목/설명 */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="w-32 h-4 bg-gray-300 rounded max-w-full"></div>
            {/* 제목 */}
            <div className="w-full h-16 bg-gray-200 rounded max-w-full"></div>
            {/* 설명 */}
          </div>
        </div>

        {/* 참여자 수 + 카테고리 한 줄 */}
        <div className="flex items-center justify-between gap-4 mt-2">
          <div className="w-20 h-3 bg-gray-200 rounded max-w-full"></div>
          {/* 참여자 */}
          <div className="w-20 h-3 bg-gray-300 rounded max-w-full"></div>
          {/* 카테고리 */}
        </div>
      </div>
    );
  }
  data.coverImgUrl = data.coverImgUrl ? data.coverImgUrl : failImg;
  return (
    <div className="bg-white border rounded-lg shadow p-4 flex flex-col gap-4">
      {/* 상단 이미지 */}
      <div className="w-full h-60 rounded-xl mb-2">
        <img
          src={data.coverImgUrl}
          className="w-full h-full object-cover"
        ></img>
      </div>

      {/* 그룹 아이콘 + 제목/설명 */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col gap-2 w-full">
          <div className="pl-1 pr-1 border rounded max-w-full truncate">
            {data.name}
          </div>
          {/* 제목 */}
          <div className="pl-1 pr-1 border rounded max-w-full h-20 line-clamp-3">
            {data.description}
          </div>
          {/* 설명 */}
        </div>
      </div>

      {/* 참여자 수 + 카테고리 한 줄 */}
      <div className="flex justify-between items-center gap-2">
        <div className="flex-1 border px-1 rounded max-w-full">
          <img src={personImg}></img>
          {data.capacity} / {data.memberCount}
        </div>
        {/* 참여자 */}
        <div className="flex-1 border px-1 rounded max-w-full">
          <img src={categoryImg}></img>
          {data.category}
        </div>
        {/* 카테고리 */}
      </div>
    </div>
  );
}

export { GroupCard };
