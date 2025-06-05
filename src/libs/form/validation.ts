export const valid = {
    must: {
        required: '필수 입력 항목입니다.',
    },
    mustCheck: {
        validate: (value: string) => {
            if (!value || value.length === 0) return '필수 입력 항목입니다.';
            else return;
        },
    },
    number: {
        pattern: {
            value: /^[0-9]+$/,
            message: '숫자만 입력해주세요.',
        },
    },
    email: {
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '유효한 이메일 주소를 입력해주세요.',
        },
    },

    length: (min: number, max: number) => {
        return {
            minLength: {
                value: min,
                message: `${min}자 이상 입력해주세요.`,
            },
            maxLength: {
                value: max,
                message: `${max}자 이하로 입력해주세요.`,
            },
        };
    },

    password: {
        validate: (value: string) => {
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
            if (!hasSpecial) {
                return '비밀번호에 특수문자를 최소 1개 이상 포함해야 합니다.';
            }
            return true;
        },
    },

    url: {
        pattern: {
            value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
            message: '유효한 URL을 입력해주세요.',
        },
    },
};
