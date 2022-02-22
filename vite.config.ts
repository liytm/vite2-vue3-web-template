import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { loadEnv, ConfigEnv, UserConfigExport } from 'vite'
const envResolve = (mode: string, env: string) => loadEnv(mode, process.cwd())[env]

// 处理打包静态资源，图片资源放到img
const dualAssetFileNames = (assetInfo: any) => {
  const patten = /.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/g
  const isImage = patten.test(assetInfo.name)
  return `assets/${isImage ? 'img' : '[ext]'}/[name].[hash].[ext]`
}
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {

  const isNotProd = mode !== 'production'
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: './mock',
        localEnabled: command === 'serve'
      })
    ],
    base: envResolve(mode, 'VITE_ROUTER_BASE'),
    server: {
      port: 9527,
      proxy: {
        '/api': {
          target: envResolve(mode, 'VITE_PROXY_URL'),
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        hashPrefix: 'prefix'
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/var.scss";'
        }
      }
    },
    build: {
      sourcemap: isNotProd,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: dualAssetFileNames
        }
      },
      terserOptions: {
        compress: {
          drop_console: isNotProd,
          drop_debugger: isNotProd
        }
      }
    }
  }
}
