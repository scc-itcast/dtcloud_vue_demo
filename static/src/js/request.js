window.myVueDemoRequest = {
    requestRequest() {
        return window.axiosReq({
            method: 'get',
            isParams: true,
            url: '/api/test/',
            data: {}
        })
    },
}