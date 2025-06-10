import useToast from "@/src/hooks/use-toast";
import { PickOne } from "@/src/type/utility-types";
import { Button } from "@mantine/core";

type Card = {
  name: string;
};

type Bard = {
  age: string;
};

type Total = PickOne<Bard & Card>;

export default function Main() {
  const { success } = useToast();

  const a = (o: Total) => {
    console.log(o.age);
    if (o.name) {
      console.log("dd");
    }
  };

  return (
    <div className="">
      <Button onClick={() => success()}>토스트</Button>
    </div>
  );
}
