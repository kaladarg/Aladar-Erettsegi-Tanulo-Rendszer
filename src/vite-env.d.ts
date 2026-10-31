/// <reference types="vite/client" />

declare const __APP_VERSION__: string;

declare module 'virtual:guide-index' {
  /** Study guide page id → unit file path relative to src/content/guide. */
  const index: Record<string, string>;
  export default index;
}
