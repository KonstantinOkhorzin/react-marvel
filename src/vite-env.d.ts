/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MARVEL_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}