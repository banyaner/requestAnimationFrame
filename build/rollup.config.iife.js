import config from './rollup.base'
import pkg from '../package.json'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default config({
  format: 'iife',
  file: pkg.main, // 默认对外的是在浏览器上运行的iife
  browser: true,
  plugins: [
    uglify()
  ],
})
