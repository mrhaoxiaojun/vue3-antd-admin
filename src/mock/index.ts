/*
 * @Author: haoxiaojun 
 * @Date: 2022-04-14 19:55:46 
 * @Details: 本地模拟后端返回数据
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-14 20:35:58
 */
import url from '@/services/url';
import Mock from 'mockjs'
import config from '@/config';
import { del, edit, editGetData, get, options as opts, upload } from './table';
import { infoData, loginData, logoutData } from './user';

const root = import.meta.env.VITE_REQUEST_BASE_URL

const mockData = config.setting.mockOnlineData ? ()=>{

  // 用户相关
  Mock.mock(root + url.login,'post',loginData)
  Mock.mock(root + url.info,'get',infoData)
  Mock.mock(root + url.logout,'post',logoutData)
  
  // layoutTable options列表数据
  Mock.mock(root + url.tableOptions,'get',opts)
  // layoutTable 添加数据
  Mock.mock(root + url.tableAdd,'post',edit)
  // layoutTable 删除数据
  Mock.mock(root + url.tableDel,'post',del)
  // layoutTable 默认编辑数据
  Mock.mock(RegExp(root + url.tableEditGetData + ".*"),'get',editGetData)
  // layoutTable 提交编辑数据
  Mock.mock(root + url.tableEdit,'post',edit)
  // layoutTable 上次接口
  Mock.mock(root + url.tableUpload,'post',upload)
  // layoutTable 获取table数据列表接口
  Mock.mock(RegExp(root + url.tableGet + ".*"),'get',(options:any)=>{
    return Mock.mock(get);
  })

}:()=>{
  console.log('111')
}

export default mockData 
