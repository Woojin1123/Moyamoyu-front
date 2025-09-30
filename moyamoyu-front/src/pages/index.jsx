import "@/pages/index.css";
import { GroupCard } from "@/components/GroupCard";
import hotImg from "@/assets/hot.png";
import groupImg from "@/assets/groups.png";
import { useEffect, useState } from "react";
import axios from "@/config/axiosConfig";
import GroupSlider from "@/components/ui/GroupSlider";
import { Button } from "@/components/ui/button";

function App() {
  const [moims, setMoims] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get("/moims");
        setMoims(response.data.data.content);
      } catch (error) {
        console.log("호출 실패", error);
      }
    };

    fetchCard();
  }, []);

  return (
    <main className="flex-1 flex flex-col gap-10">
      <section>
        {/* 인기있는 모임 */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src={hotImg} alt="@IMG" className="w-7 h-7"></img>
              <h4 className="scroll-m-20 text-xl font-semibold">인기 모임</h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              가장 많은 사용자가 관심있어 하는 모임을 확인해보세요
            </p>
          </div>
          <GroupSlider />
        </div>
      </section>
      <section>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src={groupImg} alt="@IMG" className="w-7 h-7"></img>
              <h4 className="scroll-m-20 text-xl font-semibold">전체 모임</h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              다양한 모임을 한눈에 확인해보세요!
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {moims.map((moim) => (
              <GroupCard key={moim.id} data={moim} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
