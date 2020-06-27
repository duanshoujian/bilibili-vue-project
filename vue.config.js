//配置路径
module.exports={
    lintOnSave: false,
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'network':'@/network',
                'components':'@/components',
                'views':'@/views',
                'common':'@/common',
            }
        }
    }
}
