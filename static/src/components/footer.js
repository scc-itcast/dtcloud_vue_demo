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
            <div class="footer-container bg-dark text-white d-flex justify-content-center align-items-center">
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