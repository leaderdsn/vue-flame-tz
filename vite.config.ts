import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.sass'],
	},

	plugins: [vue(), eslintPlugin({ cache: false }),],
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `
          @import "@/styles/styles.sass"
        `,
			},
		},
		devSourcemap: true,
	},
})
