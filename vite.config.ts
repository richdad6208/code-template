import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// @ts-ignore
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig(() => {
    const OUT_DIR = './dist';

    return {
        plugins: [
            react(),
            tailwindcss(),
            eslint({
                include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
                exclude: ['node_modules', 'dist'],
            }),
        ],

        resolve: {
            alias: {
                '@': path.resolve(__dirname),
            },
        },
        base: '/',
        server: {
            port: 3000,
            open: true,
        },
        build: {
            outDir: OUT_DIR,
            esbuild: {
                drop: ['console', 'debugger'],
            },
        },
    };
});
