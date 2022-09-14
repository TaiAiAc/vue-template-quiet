import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { setupVitePlugins } from './build'

export default defineConfig(configEnv => {
  const root = fileURLToPath(new URL('./', import.meta.url))
  const src = fileURLToPath(new URL('./src', import.meta.url))

  return {
    plugins: setupVitePlugins(configEnv, src),
    resolve: {
      alias: {
        '~': root,
        '@': src
      }
    }
  }
})
