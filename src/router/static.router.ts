/*
 * @Author: haoxiaojun 
 * @Date: 2022-04-11 16:08:11 
 * @Details: filterMenu === false 使用此处静态路由
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2022-04-11 16:09:36
 */
export const staticMenu = [
  {
    name: "首页",
    id: 2,  
    pid: 0,
    path: "/",
    redirect: "/dashboard",
    component: "BasicLayout",
    key: "content",
    sideBar:false,
    children: [
      {
        id: 20,
        pid: 2,
        path: '/dashboard',
        name: 'dashboard',
        key:"dashboard",
        sideBar:"N",
        component: "/dashboard/index"
      }
    ]
  },
  {
    id: 1,  
    pid: 0,
    name: "测试",
    path: "/element",
    redirect: "/element/icon",
    component: "BasicLayout",
    icon: "AppleOutlined",
    key: "layout",
    children: [
      {
        id: 10,
        pid: 1,
        name: "组件测试菜单",
        path: "/element",
        redirect: "/element/icon",
        component: "BlankView",
        icon: "ChromeOutlined",
        key: "element",
        children: [
          {
            id: 100,
            pid: 10,
            name: "图表组件示例",
            path: "/element/icon",
            redirect: "",
            component: "/element/icon",
            icon: "",
            key: "el_icon",
            keepAlive: true
          },
          {
            id: 101,
            pid: 10,
            name: "表格组件示例",
            path: "/element/table",
            redirect: "",
            component: "/element/table",
            icon: "",
            key: "el_table"
          },
          {
            id: 102,
            pid: 10,
            name: "其他示例",
            path: "/element/detail",
            redirect: "",
            component: "/element/detail",
            icon: "",
            key: "detail",
            // hidden: true
          }
        ]
      },
      {
        id: 11,
        pid: 1,
        name: "其他菜单",
        path: "/test",
        redirect: "/test/optionc",
        component: "BlankView",
        icon: "WechatOutlined",
        key: "test",
        children: [
          {
            id: 110,
            pid: 11,
            name: "Demo页面",
            path: "/test/Demo",
            redirect: "",
            component: "/test/Demo",
            icon: "",
            key: "Demo"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    pid: 0,
    name: "测试2",
    path: "/update",
    redirect: "/update/issue",
    component: "BasicLayout",
    icon: "AppleOutlined",
    key: "lan",
    children: [
      {
        id: 14,
        pid: 4,
        name: "现存问题",
        path: "/update/issue",
        redirect: "",
        component: "/update/issue",
        icon: "",
        key: "issue",
        keepAlive: true
      },
      {
        id: 15,
        pid: 4,
        name: "更新记录",
        path: "/update/log",
        redirect: "",
        component: "/update/log",
        icon: "",
        key: "log"
      }
    ]
  }
]