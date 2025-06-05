import { qK } from "@/src/libs/query-keys";
import { useQueryClient } from "@tanstack/react-query";

type TQueryKeyMap = {
  boards: (type: string) => void;
  courses: () => void;
};

export default function useManageQueryKeys() {
  const queryClient = useQueryClient();

  type TKeyMap = "boards" | "courses";

  const queryKeyMap: TQueryKeyMap = {
    boards: (type: string) => {
      queryClient.invalidateQueries({ queryKey: [qK.boards, type] });
    },
    courses: () => {
      queryClient.invalidateQueries({ queryKey: [qK.courses] });
    },
  };

  return { queryKeyMap };
}
