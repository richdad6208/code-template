import { FormFiled } from '@/src/components/form/types/form-field';
import useMakeForm from '@/src/hooks/use-make-input-div';
import { valid } from '@/src/libs/form/validation';
import { Button } from '@mantine/core';
import { FieldValues, useForm } from 'react-hook-form';

export default function Main() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { makeInputDiv } = useMakeForm({ control, errors });

    const formFields: FormFiled[] = [
        {
            class: 'space-y-2',
            children: [
                { name: 'id', label: 'id', valid: valid.must, req: true },
                { name: 'email', label: 'password' },
                { name: 'username', label: 'username' },
                {
                    type: 'select',
                    name: 'class',
                    label: 'class',
                    values: [{ label: 'React', value: 'react' }],
                },
            ],
        },
    ];

    const onSubmit = (data: FieldValues) => {
        console.log(data, 'data');
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {makeInputDiv(formFields)}

                <Button type="submit">전송</Button>
            </form>
        </div>
    );
}
