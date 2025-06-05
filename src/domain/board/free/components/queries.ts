import { api } from "@/src/api/api";
import { useQuery } from "@tanstack/react-query";

export const fetchUserInfo = () => {
  return useQuery({
    queryKey: ["FREE_USER"],
    queryFn: () => api.get("/common/user"),
  });
};
