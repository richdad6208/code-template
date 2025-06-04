import { Controller } from 'react-hook-form';
import { Input, Select } from '@mantine/core';
import { FormProps } from '@/src/components/form/types/form-props';
import { InputProvider as TInputProvider } from '@/src/components/input/types/input-provider';

interface InputProviderProps extends TInputProvider, FormProps {}

export function InputProvider({
    control,
    type,
    name,
    valid,
    errMsg,
    req,
    label,
    inputClass,
    inputType,
    ph,
    labelClass,
    values,
}: InputProviderProps) {
    if (type === 'text') {
        return (
            <Controller
                name={name}
                control={control}
                rules={valid}
                render={({ field }) => (
                    <Input.Wrapper
                        error={errMsg}
                        label={label}
                        required={req}
                        classNames={{ root: `space-y-1`, label: `${labelClass}` }}
                    >
                        <Input
                            classNames={{ input: `${inputClass}` }}
                            {...field}
                            type={inputType ?? 'text'}
                            value={field.value ?? ''}
                            onChange={(e) => field.onChange(e.target.value)}
                            placeholder={ph}
                        />
                    </Input.Wrapper>
                )}
            />
        );
    } else if (type === 'select') {
        return (
            <Controller
                name={name}
                control={control}
                rules={valid}
                render={({ field }) => (
                    <Select
                        classNames={{ input: `${inputClass}`, label: `${labelClass}` }}
                        error={errMsg}
                        label={label}
                        required={req}
                        placeholder={ph}
                        data={values}
                        value={field.value ?? ''}
                        onChange={(e) => field.onChange(e)}
                    />
                )}
            />
        );
    }
}
