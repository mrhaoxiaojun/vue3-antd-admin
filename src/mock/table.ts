
export const get = {
  "code": 200,
  "message": "数据列表",
  "total": 60,
  "current": 1,
  "pageSize": 10,
  "data": [
    {
      "id": 1,
      "name": "安少华",
      "age": 36,
      "addr": "泥湾区龙门山小区1号楼4单元",
      "phone": "13902056096",
      "industry": "儿童服装",
      "wealth": 5.3
    },
    {
      "id": 2,
      "name": "李晟",
      "age": 37,
      "addr": "西湖区湖底公园别墅豪宅1号",
      "phone": "18166618691",
      "industry": "风险投资",
      "wealth": 15.3
    },
    {
      "id": 3,
      "name": "王建军",
      "age": 51,
      "addr": "安门区盛世帝府独享私家宅",
      "phone": "19188886166",
      "industry": "资本投资",
      "wealth": 108
    },
    {
      "id": 4,
      "name": "马九波",
      "age": 40,
      "addr": "新华区花神庙郦都花苑6栋",
      "phone": "13622315166",
      "industry": "房地产",
      "wealth": 42
    },
    {
      "id": 5,
      "name": "李珊珊",
      "age": 30,
      "addr": "西湖区罗华岛3府",
      "phone": "19162061201",
      "industry": "军工产品",
      "wealth": 20
    }
  ]
}

export const editGetData = {
  "code": 200,
  "data": {
    "id": 1,
    "name": "修改数据前查询",
    "age": 36,
    "addr": "泥湾区龙门山小区1号楼4单元",
    "phone": "13902056096",
    "industry": "儿童服装",
    "wealth": 5.3,
    "formnet": "这是表单插槽"
  },
  "message": "编辑成功"
}
export const edit ={
  "code": 200,
  "message": "编辑成功"
}
export const del = {
  "code": 200,
  "message": "删除成功"
}
export const upload ={
  "code": 200,
  "message": "上传成功",
  "url": "https://img2.baidu.com/it/u=1342701199,2079596281&fm=26&fmt=auto&gp=0.jpg"
}
export const options = {
  "code": 200,
  "data": {
    "industry": [
      {
        "label": "儿童服装",
        "value": 1
      },
      {
        "label": "风险投资",
        "value": 2
      },
      {
        "label": "资本投资",
        "value": 3
      },
      {
        "label": "房地产",
        "value": 4
      },
      {
        "label": "军工产品",
        "value": 5
      }
    ],
    "cat": [
      {
        "label": "奥迪",
        "value": "aodi"
      },
      {
        "label": "宝马",
        "value": "baoma"
      },
      {
        "label": "沃尔沃",
        "value": "oero"
      },
      {
        "label": "丰田",
        "value": "fengt"
      },
      {
        "label": "本田",
        "value": "bent"
      }
    ]
  },
  "message": "编辑成功"
}