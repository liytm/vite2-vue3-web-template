/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMetaEnv {
  readonly VITE_ENV: string
  readonly VITE_ROUTER_BASE: string
  readonly VITE_API_BASE: string
  readonly VITE_PROXY_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
