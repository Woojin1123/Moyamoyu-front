import { AppFooter, AppHeader } from "./components/common";
import "./App.css";
import { GroupCard } from "./components/GroupCard";
import hotImg from "./assets/hot.png";
import groupImg from "./assets/groups.png";

function App() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container mb-10">
        <main className="flex-1 flex flex-col gap-10">
          <section>
            {/* 인기있는 모임 */}
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={hotImg} alt="@IMG" className="w-7 h-7"></img>
                  <h4 className="scroll-m-20 text-xl font-semibold">
                    인기 모임
                  </h4>
                </div>
                <p className="md:text-base text-muted-foreground">
                  가장 많은 사용자가 확인한 모임을 확인해보세요
                </p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
              </div>
            </div>
          </section>
          <section>
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={groupImg} alt="@IMG" className="w-7 h-7"></img>
                  <h4 className="scroll-m-20 text-xl font-semibold">
                    전체 모임
                  </h4>
                </div>
                <p className="md:text-base text-muted-foreground">
                  다양한 모임을 한눈에 확인해보세요!
                </p>
              </div>
              <div className="grid grid-cols-5 gap-6">
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
              </div>
            </div>
          </section>
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
