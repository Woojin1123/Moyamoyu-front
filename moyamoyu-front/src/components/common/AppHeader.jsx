function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3 bg-red-200">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5 ">
          <div className="font-semibold text-red-500">내 모임</div>
          <span className="text-gray-400">|</span>
          <div className="font-semibold text-red-500">모임 찾아보기</div>
        </div>
        {/* 로그인 UI */}
        <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500">
          로그인
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
