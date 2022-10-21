import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import { setupVitePlugins } from './build'

export default defineConfig((configEnv) => {
  const root = fileURLToPath(new URL('./', import.meta.url))
  const src = fileURLToPath(new URL('./src', import.meta.url))

  return {
    plugins: setupVitePlugins(configEnv, src),
    resolve: {
      alias: {
        '~': root,
        '@': src,
      },
    },
    build: {
      rollupOptions: {
        manualChunks(input, { getModuleInfo }) {
          if (input.includes('naive-ui'))
            return 'naive-ui'

          // 打包依赖
          if (input.includes('node_modules'))
            return 'vendor'

          const reg = /(.*)\/src\/components\/(.*)/
          if (reg.test(input)) {
            const importersLen = getModuleInfo(input)?.importers.length
            // 被多处引用
            if (importersLen && importersLen > 1)
              return 'common'
          }
        },
      },
    },
  }
})
