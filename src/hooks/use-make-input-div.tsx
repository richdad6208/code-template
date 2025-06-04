import { FormFiled } from '@/src/components/form/types/form-field';
import { FormProps } from '@/src/components/form/types/form-props';
import { InputProvider } from '@/src/components/input/input-provider';

export default function useMakeForm({
    register,
    control,
    watch,
    clearErrors,
    errors,
    setError,
}: FormProps) {
    const makeInputDiv = (formFields: FormFiled[]) => {
        const baseInputClass = '!h-12 ';
        const baseLabelClass = '!text-xl';

        return formFields.map((field: FormFiled, idx: number) => (
            <div key={idx} className={field.class ?? ''}>
                {field.children.map((child, childIdx: number) => {
                    return (
                        <div key={childIdx}>
                            <InputProvider
                                register={register}
                                control={control}
                                watch={watch}
                                clearErrors={clearErrors}
                                errors={errors}
                                setError={setError}
                                name={child.name}
                                type={child.type ?? 'text'}
                                ph={child.ph}
                                req={child.req}
                                label={child.label}
                                valid={child.valid}
                                values={child.values}
                                inputClass={`${baseInputClass}`}
                                labelClass={`${baseLabelClass}`}
                                errMsg={errors?.[child.name]?.message as string}
                            />
                        </div>
                    );
                })}
            </div>
        ));
    };

    return { makeInputDiv };
}
