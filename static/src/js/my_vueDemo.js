dtcloud.define('my_vueDemo', function (require) {
    'use strict';
    let core = require('web.core');
    let AbstractAction = require('web.AbstractAction');

    let my_vueDemo = AbstractAction.extend({
        template: 'my_vueDemo',
        // 初始化，可以在action 里传入参数
        init: function (parent, action) {
            return this._super.apply(this, arguments);
        },
        editor: null,
        start() {
            $(document).ready(() => {
                let self = this
                setTimeout(() => {

                    new Vue({
                        el: '#vueDemo',
                        data: self._datas(),
                        created() {
                            self._created.call(this)
                        },
                        mounted() {
                            self._mounted.call(this)
                        },
                        methods: self._methods,
                    })

                    // console.log('el', self.el)
                }, 300)

            })
        },
        _datas() {
            return {
                showTabResult: true,//是否展示
                tableData_header: window.myVueDemoMap.tableData_header || [],//表格头
                tableData: window.myVueDemoMap.tableData || [],//表格数据
                radio: 3,
                footerMap: {
                    describe: 'footer describe'
                }
            }
        },
        _created() {
            this.requestRequest()
        },
        _mounted() {
            console.log('mounted')
        },
        _methods: {
            async requestRequest() {
                const data = await myVueDemoRequest.requestRequest()
                console.log('requestRequest', data)
            },
            clickSubmit() {
                console.log('this', this)
                this.showTabResult = !this.showTabResult;
            },
            clickSubmits() {
                console.log('this', this)
                this.showTabResult = !this.showTabResult;
            }
        }
    })

    core.action_registry.add('my_vueDemo', my_vueDemo);

    return my_vueDemo

})