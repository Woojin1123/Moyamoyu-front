function AppFooter() {
  return (
    <footer className="w-full h-auto bg-gray-200">
      <div className="w-full flex flex-col gap-6 p-6">
        <div className="w-full flex items-center justify-between px-15">
          <div>
            <p className="text-black">@AllRights Reserved From MoyaMoyu</p>
          </div>
          <div className="flex gap-10">
            <p className="text-black">개인정보 정책</p>
            <p className="text-black">이용약관</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };
