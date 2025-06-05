import { toast } from "react-toastify";

export default function useToast() {
  const SUCCESS_MSG = "요청이 성공하였습니다.";
  const ERROR_MSG = "에러가 발생했습니다.";
  const CLOSE_TIME = 1000;

  const config = {
    autoClose: CLOSE_TIME,
  };
  return {
    success: (msg?: string) => toast.success(msg ?? SUCCESS_MSG, config),
    error: (msg?: string) => toast.error(msg ?? ERROR_MSG, config),
  };
}
