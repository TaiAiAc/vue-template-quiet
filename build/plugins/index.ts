import type { ConfigEnv, PluginOption } from 'vite'
import windicss from './windicss'
import vue from './vue'
import autoImport from './auto-import'
import lint from './lint'

/**
 * vite插件
 * @param configEnv - 环境
 * @param srcPath - src路径
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(configEnv: ConfigEnv, srcPath: string): (PluginOption | PluginOption[])[] {
  const plugins = [vue, ...autoImport(srcPath), windicss, lint]

  return plugins
}
