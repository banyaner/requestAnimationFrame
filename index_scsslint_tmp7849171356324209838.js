/**
 * Created by zhongjx on 2018/5/31.
 */
// iOS6 有bug，但目前不考虑兼容了
if (!window.requestAnimationFrame) {
    const prefixes = ['webkit', 'moz']
    for (const prefix of prefixes) {
        window.requestAnimationFrame = window[prefix + 'RequestAnimationFrame']
        window.cancelAnimationFrame = (window[prefix + 'CancelAnimationFrame']
            || window[prefix + 'CancelRequestAnimationFrame'])
        if (window.requestAnimationFrame) {
            break
        }
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (() => {
            let lastTime = 0
            return (cb) => {
                const now = Date.now()
                const nextTime = Math.max(lastTime + 41, now) // 电影fps=24所以1帧为1000ms/24约41ms；若要达到和系统相同频率60HZ，则为1000ms/60约16ms
                return setTimeout(() => {
                    cb()
                    lastTime = nextTime
                }, nextTime - now)
            }
        })()
        window.cancelAnimationFrame = clearTimeout
    }
}
