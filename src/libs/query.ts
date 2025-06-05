import { api } from "@/src/api/api";
import { time } from "@/src/constance/TIME";
import { useConfirmModal } from "@/src/store/use-confirm-modal";
import { useMutation, useQuery } from "@tanstack/react-query";

interface IMutationFn {
  url: string;
  data: FormData | object;
  dataType?: "json" | "formData";
  option?: object;
  method?: "post" | "put" | "patch" | "delete";
  isDefaultError?: boolean;
  isDefaultSuccess?: boolean;
  route?: string;
  action?: () => void;
}

export const usePost = () => {
  const { setModal } = useConfirmModal();

  const { mutate, isPending } = useMutation<any, Error, IMutationFn>({
    mutationFn: ({ url, data, dataType = "json", method = "post" }) => {
      let config = {};
      switch (dataType) {
        case "json":
          config = { headers: { "Content-Type": "application/json" } };
          break;
        case "formData":
          config = { headers: { "Content-Type": "multipart/form-data" } };
          break;
      }

      switch (method) {
        case "post":
          return api.post(url, data, config);
        case "patch":
          return api.patch(url, data, config);
        case "put":
          return api.put(url, data, config);
        case "delete":
          return api.delete(url);
      }
    },

    onSuccess: (data, variables) => {
      if (variables.isDefaultSuccess) {
        setModal({
          content: data.message,
          action: () => {
            if (variables.action) variables.action();
          },
        });
      }
    },

    onError: (err, variables) => {
      if (variables.isDefaultError) {
        setModal({ type: "error", content: err.message });
      }
    },
  });

  return { mutate, isPending };
};

interface IUseCQuery {
  url: string;
  queryKey: string[];
}

export const useGet = ({ url, queryKey }: IUseCQuery) => {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: () => api.get(url),
    staleTime: time.day,
    gcTime: time.day,
  });

  return { data, isLoading, isError };
};
