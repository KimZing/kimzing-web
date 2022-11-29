const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // 部署应用包时的基本 URL
    publicPath: '/',
    // babel默认不会编译依赖库，会导致不支持最新ES语法的浏览器报错，此时设置为true，则将库的编译也交由babel进行转译
    transpileDependencies: true,
    // 本地开发服务运行时的相关配置
    devServer: {
        // 本地跨域配置, 和nginx的反向代理一个道理
        proxy: {
            '/api': {
                target: process.env.VUE_APP_PROXY_URL,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        port: 3000
    }
})
