import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(() => {
    const OUT_DIR = './dist';

    return {
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, './src'),
                '@api': path.resolve(__dirname, './src/api'),
                '@components': path.resolve(__dirname, './src/components'),
                '@config': path.resolve(__dirname, './src/config'),
                '@css': path.resolve(__dirname, './src/css'),
                '@constance': path.resolve(__dirname, './src/constance'),
                '@domain': path.resolve(__dirname, './src/domain'),
                '@portal': path.resolve(__dirname, './src/domain/portal'),
                '@model': path.resolve(__dirname, './src/model'),
                '@router': path.resolve(__dirname, './src/router'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@store': path.resolve(__dirname, './src/store'),
                '@utils': path.resolve(__dirname, './src/utils'),
            },
        },
        base: '/',
        server: {
            port: 3000,
            open: true,
        },
        build: {
            outDir: OUT_DIR,
        },
    };
});
