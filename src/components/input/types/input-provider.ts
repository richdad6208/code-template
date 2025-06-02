import { InputType } from '@/src/components/input/types/input-type';

export interface InputProvider {
    name: string;
    type?: InputProviderType;
    ph?: string;
    label?: string;
    valid?: object;
    errMsg?: string;
    req?: boolean;
    inputClass?: string;
    inputType?: InputType;
    labelClass?: string;
}

export type InputProviderType = 'text';
