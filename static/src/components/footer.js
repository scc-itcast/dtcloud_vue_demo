// 定义一个名为 my-footer 的新组件
Vue.component('my-footer', {
    functional: true,
    props: {
        data: {
            describe: {
                type: String,
                required: true
            }
        }
    },
    render: function (createElement, context) {
        const {data} = context.props
        let template = `
            <div class="footer-container">
               ${data.describe}
            </div>  
                    `
        return createElement(
            {
                template: template
            }
        );
    }
})