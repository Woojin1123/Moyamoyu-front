function GroupCard() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-4 animate-pulse">
      {/* 상단 이미지 */}
      <div className="w-full h-60 bg-gray-300 rounded mb-2"></div>

      {/* 사용자 아이콘 + 제목/설명 */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-32 h-4 bg-gray-300 rounded"></div> {/* 제목 */}
          <div className="w-full h-16 bg-gray-200 rounded"></div> {/* 설명 */}
        </div>
      </div>

      {/* 참여자 수 + 카테고리 한 줄 */}
      <div className="flex items-center justify-between gap-4 mt-2">
        <div className="w-20 h-3 bg-gray-200 rounded"></div> {/* 참여자 */}
        <div className="w-20 h-3 bg-gray-300 rounded"></div> {/* 카테고리 */}
      </div>
    </div>
  );
}
export { GroupCard };
