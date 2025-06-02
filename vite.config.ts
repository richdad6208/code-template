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
        },
    };
});
