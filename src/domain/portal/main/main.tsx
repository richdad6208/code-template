import useToast from "@/src/hooks/use-toast";
import { Button } from "@mantine/core";

export default function Main() {
  const { success } = useToast();

  return (
    <div className="">
      <Button onClick={() => success()}>토스트</Button>
    </div>
  );
}
