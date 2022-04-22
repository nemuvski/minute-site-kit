import { resolve, join } from 'path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'
import sassGlobImports from 'vite-plugin-sass-glob-import'
import autoprefixer from 'autoprefixer'

const PORT = 8080
const BASE_PATH = '/'
const CLIENT_PUBLIC_ENV_PREFIX = 'PUBLIC_'
const ROOT_DIR_PATH = resolve(__dirname, 'src')
const PUBLIC_ASSETS_DIR_PATH = join(ROOT_DIR_PATH, 'static')
const OUTPUT_DIR_PATH = resolve(__dirname, 'dist')
const ENV_DIR_PATH = __dirname

export default defineConfig(({ mode }) => {
  const isProductionMode = mode === 'production'
  const esbuildPure = isProductionMode ? ['console.log', 'console.info', 'console.debug', 'console.trace'] : undefined

  return {
    server: { port: PORT },
    preview: { port: PORT + 1 },
    root: ROOT_DIR_PATH,
    publicDir: PUBLIC_ASSETS_DIR_PATH,
    envDir: ENV_DIR_PATH,
    envPrefix: CLIENT_PUBLIC_ENV_PREFIX,
    base: BASE_PATH,
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
    build: {
      outDir: OUTPUT_DIR_PATH,
      emptyOutDir: true,
      manifest: true,
    },
    esbuild: {
      pure: esbuildPure,
    },
    plugins: [
      sassGlobImports(),
      eslintPlugin({ throwOnWarning: true, throwOnError: true }),
      createHtmlPlugin({
        minify: {
          removeComments: true,
        },
      }),
    ],
    resolve: {
      alias: [{ find: '~', replacement: ROOT_DIR_PATH }],
    },
  }
})
