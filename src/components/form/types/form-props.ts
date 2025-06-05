import {
    Control,
    FieldErrors,
    FieldValues,
    FormState,
    UseFormClearErrors,
    UseFormGetFieldState,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
    UseFormResetField,
    UseFormSetError,
    UseFormSetFocus,
    UseFormSetValue,
    UseFormTrigger,
    UseFormUnregister,
    UseFormWatch,
} from 'react-hook-form';

export type FormProps<Context = any> = {
    watch?: UseFormWatch<FieldValues>;
    getValues?: UseFormGetValues<FieldValues>;
    getFieldState?: UseFormGetFieldState<FieldValues>;
    setError?: UseFormSetError<FieldValues>;
    clearErrors?: UseFormClearErrors<FieldValues>;
    setValue?: UseFormSetValue<FieldValues>;
    trigger?: UseFormTrigger<FieldValues>;
    formState?: FormState<FieldValues>;
    resetField?: UseFormResetField<FieldValues>;
    reset?: UseFormReset<FieldValues>;
    handleSubmit?: UseFormHandleSubmit<FieldValues>;
    unregister?: UseFormUnregister<FieldValues>;
    control: Control<FieldValues, Context>;
    register?: UseFormRegister<FieldValues>;
    setFocus?: UseFormSetFocus<FieldValues>;
    errors: FieldErrors<FieldValues>;
};
