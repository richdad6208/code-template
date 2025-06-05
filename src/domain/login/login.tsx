import { FormFiled } from "@/src/components/form/types/form-field";
import useMakeForm from "@/src/hooks/use-make-input-div";
import { Button } from "@mantine/core";
import { FieldValues, useForm } from "react-hook-form";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { makeInputDiv } = useMakeForm({ control, errors });

  const inputFields: FormFiled[] = [
    {
      children: [
        {
          name: "id",
          label: "Id",
        },
        {
          name: "pw",
          label: "Password",
        },
      ],
    },
  ];

  const onSubmit = (data: FieldValues) => {
    console.table(data);
  };

  return (
    <div className="h-screen center">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {makeInputDiv(inputFields)}
        <div className="flex justify-center">
          <Button type="submit">로그인</Button>
        </div>
      </form>
    </div>
  );
}
