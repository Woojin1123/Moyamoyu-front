import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "@/config/axiosConfig";

const useAuthStore = create(
  persist(
    (set, get) => ({
      accessToken: null,
      isLoggedIn: false,

      login: (token) => {
        set({ accessToken: token, isLoggedIn: true });
      },
      logout: () => {
        set({ accessToken: null, isLoggedIn: false });
      },
      refresh: async () => {
        try {
          const response = await axios.post("/auth/refresh", {});
          const accessToken = response.data.data;
          set({ accessToken, isLoggedIn: true });
          console.log("액세스 토큰 갱신 성공");
        } catch (error) {
          console.log("액세스 토큰 갱신 실패", error);
          set({ accessToken: null, isLoggedIn: false });
        }
      },
      getAccessToken: () => get().accessToken,
    }),
    {
      name: "auth-storage", //
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
