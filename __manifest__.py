{
    'name': "vueDemo",
    'summary': "vueDemo",
    'description': """vueDemo""",
    'author': "scc",
    'website': "",
    'category': '智慧文旅/vueDemo',
    'version': '0.1',
    'depends': ['base'],
    'data': [
        'views/home.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # ## 页面
            'dtb_vue_demo/static/src/xml/**/*',
            # ## 库文件
            'dtb_vue_demo/static/src/lib/vue.js',
            'dtb_vue_demo/static/src/lib/axios.min.js',
            'dtb_vue_demo/static/src/lib/semantic.min.js',
            'dtb_vue_demo/static/src/lib/semantic.min.css',
            # ## 主文件
            'dtb_vue_demo/static/src/js/data.js',
            # 封装的请求
            'dtb_vue_demo/static/src/js/axiosReq.js',
            # 请求的接口
            'dtb_vue_demo/static/src/js/request.js',
            # 主要入口
            'dtb_vue_demo/static/src/js/my_vueDemo.js',
            # 项目全局css
            'dtb_vue_demo/static/src/css/my_vueDemo.css',
            # ## 组件
            'dtb_vue_demo/static/src/components/header.js',
            'dtb_vue_demo/static/src/components/header.css',
            'dtb_vue_demo/static/src/components/footer.js',
            'dtb_vue_demo/static/src/components/footer.css',
        ],
    },
    'installable': True,
    'application': True,
}
