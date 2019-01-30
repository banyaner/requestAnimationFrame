/**
 * Created by zhongjx on 2019-01-26.
 */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from '../package.json'

export default (config = {plugins: []}) => ({
  input: './src/main.js',
  output: {
    file: config.file,
    format: config.format,
    name: pkg.name,
  },
  plugins: [
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    ...config.plugins,
  ],
  // 指出应将哪些模块视为外部模块,Peer dependencies
  external: []
})
