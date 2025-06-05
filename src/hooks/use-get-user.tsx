import { api } from "@/src/api/api";
import { LOCAL_STORAGE_KEYS } from "@/src/constance/STORAGE";
import { time } from "@/src/constance/TIME";
import { useQuery } from "@tanstack/react-query";

type UserState = "loading" | "authenticated" | "unauthenticated";

export default function useGetUser() {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get("/auth/check"),
    staleTime: time.day,
    gcTime: time.day,
    enabled:
      typeof window !== "undefined" &&
      localStorage.getItem(LOCAL_STORAGE_KEYS.IS_LOGIN) === "true",
  });

  let userState: UserState = "loading";

  if (data) {
    userState = "authenticated";
  } else if (!isFetching && !data) {
    userState = "unauthenticated";
  }

  return { user: data?.data, isLoading, isError, userState };
}
