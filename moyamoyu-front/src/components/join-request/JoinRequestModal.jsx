import { useState, useEffect } from "react";
import axios from "@/config/axiosConfig";

export default function JoinRequestModal({ type, open, onClose, title }) {
  const [requests, setRequests] = useState([]);
  const [requestPage, setRequestPage] = useState({
    pageNo: 0,
    totalElements: 0,
    totalPages: 0,
  });
  const currentPage = requestPage.pageNo + 1 || 1;
  const handlePages = async (pageNum) => {
    try {
      const response = await axios.get(
        `/join-requests/received?page=${pageNum - 1}`
      );
      const data = response.data.data;
      setRequests(data.content);
      setRequestPage({
        pageNo: data.pageable.pageNumber,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
      });
    } catch (error) {
      console.log("api 요청 실패", error);
    }
  };
  useEffect(() => {
    if (open) handlePages(1); // 모달 켤 때 첫 페이지 요청
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-5 bg-white min-w-[50vh] min-h-[50vh] rounded-2xl p-6 w-96 max-w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold p-2">{title}</h2>
          <button
            onClick={onClose}
            className="text-xl !font-bold !border-none !bg-white text-gray-500 hover:text-black"
          >
            X
          </button>
        </div>
        <div className="h-[50vh] flex flex-col">
          {requests.map((req) => (
            <div key={req.id} className="flex h-[15%] border">
              <div className="flex-1">
                <div>Request ID : {req.id}</div>
                <div>신청자 : {req.nickname}</div>
                <div>신청 모임 : {req.moimName}</div>
              </div>
              <div className="flex-1 py-2 overflow-y-auto break-words">
                {req.message}
              </div>
              <div className="w-[15%] flex flex-col p-2 gap-2">
                <div className="flex-1 bg-lime-500 rounded-xl flex items-center justify-center">
                  수락
                </div>
                <div className="flex-1 flex items-center bg-red-400 rounded-xl justify-center">
                  거절
                </div>
              </div>
            </div>
          ))}
          <div className="flex space-x-2 justify-center mt-4">
            {/* page -> totalPages꺼내오고 한페이지에는 6개씩만 보여줌 */}
            {Array.from(
              { length: requestPage.totalPages },
              (_, i) => i + 1
            ).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePages(pageNum)}
                disabled={currentPage === pageNum}
                className={`px-3 py-1 
                  ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-black cursor-default"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
