/**
 * Created by zhongjx on 2018/5/31.
 */
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import eslint from 'rollup-plugin-eslint';

export default {
    input: 'index.js',
    output: {
        file: 'dist/index.min.js',
        format: 'iife',
        // moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        sourcemap: false,
    },
    plugins: [
        eslint({
            formatter: require('eslint-friendly-formatter')
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify(),
    ],
}