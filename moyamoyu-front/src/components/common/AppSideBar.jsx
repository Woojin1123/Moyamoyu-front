import { useState } from "react";
import axios from "@/config/axiosConfig";
import JoinRequestModal from "@/components/join-request/JoinRequestModal";

function AppSideBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [requests, setRequests] = useState([]);
  const [requestPage, setRequestPage] = useState({
    pageNo: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const handleClick = async (type) => {
    setModalTitle(type === "received" ? "받은 요청" : "신청 요청");
    setModalOpen(true);

    try {
      const url =
        type === "received" ? "/join-requests/received" : "/join-requests/sent";
      const response = await axios.get(url);
      setRequests(response.data.data.content);
      const totalElements = response.data.data.totalElements;
      const totalPages = response.data.data.totalPages;
      const pageNo = response.data.data.pageable.pageNumber;
      setRequestPage({ pageNo, totalElements, totalPages });
      console.log(requestPage);
    } catch (err) {
      console.error("API 호출 실패", err);
      setRequests([{ message: "데이터를 불러올 수 없습니다." }]);
    }
  };

  return (
    <>
      <aside className="w-[9%] h-max sticky top-20 bg-gray-50 py-4 px-2 shadow-xl">
        <ul className="space-y-4">
          <li
            onClick={() => handleClick("received")}
            className="font-semibold px-2 py-1 hover:rounded-sm hover:bg-gray-200 cursor-pointer"
          >
            받은 참가 요청 확인
          </li>
          <li
            onClick={() => handleClick("request")}
            className="font-semibold px-2 py-1 hover:rounded-sm hover:bg-gray-200 cursor-pointer"
          >
            신청한 참가 요청 확인
          </li>
        </ul>
      </aside>
      <JoinRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        requests={requests}
        page={requestPage}
      />
    </>
  );
}
export { AppSideBar };
