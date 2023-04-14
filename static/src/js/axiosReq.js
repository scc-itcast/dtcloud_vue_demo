let reqConfig

const service = axios.create()

// 请求拦截
service.interceptors.request.use(
    (request) => {
        // 所有的请求都是formdata
        request.headers['Content-Type'] = 'multipart/form-data'
        /* download file*/
        if (request.isDownLoadFile) {
            request.responseType = 'blob'
        }
        reqConfig = request
        /*
         *params会拼接到url上
         * */
        if (request.isParams) {
            request.params = request.data
            request.data = {}
        } else {
            let fd = new FormData()
            for (const key in request.data) {
                fd.append(key, request.data[key])
            }
            request.data = fd
        }
        return request
    },
    (err) => {
        Promise.reject(err)
    }
)
// 响应拦截
service.interceptors.response.use(
    (res) => {
        // 如果是下载文件直接返回
        if (reqConfig.isDownLoadFile) {
            return res
        }
        const {data, code} = res.data
        //更新token保持登录状态
        // console.log('data==>>', data, code)
        const successCode = '0,200,20000,500'
        if (successCode.includes(code)) {
            if (code === 500) {
                console.error('服务器请求失败')
                return
            }
            return data
        } else {
            if (reqConfig.isAlertErrorMsg) {
                console.error('服务器请求失败')
            }
            //返回错误信息
            //如果未catch 走unhandledrejection进行收集
            //注：如果没有return 则，会放回到请求方法中.then ,返回的res为 undefined
            return Promise.reject(res.data)
        }
    },
    (err) => {
        /*http错误处理，处理跨域，404，401，500*/
        console.error('err')
        //如果是跨域
        //Network Error,cross origin
        const errObj = {
            msg: err.toString(),
            reqUrl: reqConfig.baseURL + reqConfig.url,
            params: reqConfig.isParams ? reqConfig.params : reqConfig.data
        }
        return Promise.reject(JSON.stringify(errObj))
    }
)

function axiosReq({
                      url,
                      data,
                      method,
                      isParams,
                      bfLoading,
                      afHLoading,
                      isUploadFile,
                      isDownLoadFile,
                      baseURL,
                      timeout,
                      isAlertErrorMsg = true
                  }) {
    return service({
        url: url,
        method: method ?? 'get',
        data: data ?? {},
        isParams: isParams ?? false,
        bfLoading: bfLoading ?? false,
        afHLoading: afHLoading ?? true,
        isUploadFile: isUploadFile ?? false,
        isDownLoadFile: isDownLoadFile ?? false,
        isAlertErrorMsg: isAlertErrorMsg,
        baseURL: baseURL ?? '',
        timeout: timeout ?? 15000
    })
}

window.axiosReq = axiosReq


