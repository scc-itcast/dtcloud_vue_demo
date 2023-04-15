// 定义一个名为 my-header 的新组件
Vue.component('my-header', {
    data: function () {
        return {
            count: 0
        }
    },
    created() {
        this.count = 10
    },
    methods: {
        clickCountAdd() {
            this.count++
        }
    },
    template: '<div class="header-container bg-primary text-white d-flex justify-content-center align-items-center" v-on:click="clickCountAdd">You clicked me {{ count }} times.</div>'
})