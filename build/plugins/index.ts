import type { ConfigEnv, PluginOption } from 'vite'
import unocss from '@unocss/vite'
import vue from './vue'
import autoImport from './auto-import'
import lint from './lint'

/**
 *	vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(configEnv: ConfigEnv, srcPath: string): (PluginOption | PluginOption[])[] {
  const plugins = [vue, ...autoImport(srcPath), unocss(), lint]

  return plugins
}
