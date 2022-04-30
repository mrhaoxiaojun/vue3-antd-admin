/*
 * @Author: haoxiaojun 
 * @Date: 2022-04-10 15:10:49 
 * @Details: 统一管理URL好处 1、避免命名空间冲突 2、方便代理开发初期不同微服务或IP 3、方便代理其他第三方域名；弊端大家都改可能会有代码冲突
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-14 19:22:52
 */
let api = process.env.NODE_ENV !== 'production' ? '' :''

export default {
  // 登录模块
  login:`${api}/login`,
  info:`${api}/info`,
  menu:`${api}/menu`,
  logout:`${api}/logout`,
  // layoutTable
  tableGet:`${api}/table`,
  tableAdd:`${api}/table/add`,
  tableEditGetData:`${api}/table/editGetData`,
  tableEdit:`${api}/table/edit`,
  tableDel:`${api}/table/del`,
  tableUpload:`${api}/table/upload`,
  tableOptions:`${api}/table/options`,
  // 用户模块
  // 首页模块
  // 其他模块
  // ...
}