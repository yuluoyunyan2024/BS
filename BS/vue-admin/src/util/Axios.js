import axios from 'axios'

const config = {
  baseUrl: '/api/admin/',
  header: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsib3BlbmlkIjoib2RpMks2MEFFamdXaXRHOVpSeVZ1MUJmM2ozYyJ9LCJleHAiOjE3MTA3ODM3OTB9.HycTliidKsJitfgTGGoi54d5BooIS3joLD7oyThcmmU'
  }
}

export default {
  /**
   *
   * @param {{api: String, data: Object}} param
   * @returns
   */
  doPOST(param) {
    return axios({
      url: config.baseUrl + param.api,
      method: 'post',
      data: param.data,
      headers: {
        Authorization: config.header.Authorization
      }
    })
  },

  /**
   *
   * @param {{api: String, resource: String}} param
   * @returns
   */
  doDELETE(param) {
    return axios({
      url: config.baseUrl + param.api + '/' + param.resource,
      method: 'post',
      headers: {
        Authorization: config.header.Authorization
      }
    })
  },

  /**
   *
   * @param {{api: String, resource: String, data: Object}} param
   * @returns
   */
  doPUT(param) {
    return axios({
      url: config.baseUrl + param.api + '/' + param.resource,
      method: 'put',
      data: param.data,
      headers: {
        Authorization: config.header.Authorization
      }
    })
  },

  /**
   *
   * @param {{api: String, params: Object}} param
   * @returns { Promise } promise
   */
  doGET(param) {
    if (param.api == 'login-log') {
      return axios({
        url: config.baseUrl + param.api,
        method: 'get',
        params: param.params
      })
      //   .then((res) => {
      //     setJWT(res.data.data.jwt)
      //     console.log(getJWT())
      //   })
      //   .catch((err) => {
      //     throw new Error('出错啦！', err)
      //   })
    } else {
      console.log(config.baseUrl + param.api)
      return axios({
        url: config.baseUrl + param.api,
        method: 'get',
        params: param.params,
        headers: {
          Authorization: config.header.Authorization
        }
      })
    }
  }
}
