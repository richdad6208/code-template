import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import { version } from 'os';

export default defineConfig([
    // JS 기본 설정
    js.configs.recommended,

    // TypeScript 설정 (배열이므로 spread 사용)
    ...tseslint.configs.recommended,

    // React 설정
    pluginReact.configs.flat.recommended,

    // 공통 룰 및 환경
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            // 필요시 다른 룰도 추가 가능
            'react/react-in-jsx-scope': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]);
