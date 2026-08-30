/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_ENV: string;
  readonly TAURI_DEV_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
