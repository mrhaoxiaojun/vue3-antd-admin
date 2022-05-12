<template>
  <a-row type="flex" justify="space-between" align="top" class="dashboard">
    <a-col :span="6" class="item-box">
      <!-- 风险模块 -->
      <div class="box">
        <div class="header">
          <span class="title">风险管控</span>
          <span class="more">更多</span>
        </div>
        <div class="pending-box">
          <div
            v-for="(item, i) in riskData"
            :key="i"
            class="list"
            :style="{ backgroundColor: item.bgColor }"
          >
            <span class="content num" :style="{ color: item.numColor }">{{ item.num }}</span>
            <span class="content text" :style="{ color: item.textColor }">{{ item.text }}</span>
          </div>
        </div>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="pagination"
          :row-class-name="(record:any, index:any) => (index % 2 === 1 ? 'table-striped' : null)"
          class="common-table"
        >
          <template #name="{ text }">
            <a>{{ text }}</a>
          </template>
        </a-table>
      </div>
      <!-- 防患模块 -->
      <div class="box">
        <div class="header">
          <span class="title">防患治理</span>
          <span class="more">更多</span>
        </div>
        <div class="pending-box">
          <div
            v-for="(item, i) in riskData"
            :key="i"
            class="list"
            :style="{ backgroundColor: item.bgColor }"
          >
            <span class="content num" :style="{ color: item.numColor }">{{ item.num }}</span>
            <span class="content text" :style="{ color: item.textColor }">{{ item.text }}</span>
          </div>
        </div>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="pagination"
          :row-class-name="(record:any, index:any) => (index % 2 === 1 ? 'table-striped' : null)"
          class="common-table"
        >
          <template #name="{ text }">
            <a>{{ text }}</a>
          </template>
        </a-table>
      </div>
    </a-col>
    <a-col :span="12" class="item-box">
      <div class="inspection">
        <!-- 巡检 -->
        <div class="inspection-box">
          <div class="box-header">xxxx</div>
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="pagination"
            :row-class-name="(record:any, index:any) => (index % 2 === 1 ? 'table-striped' : null)"
            class="common-table sm-table"
          >
            <template #name="{ text }">
              <a>{{ text }}</a>
            </template>
          </a-table>
        </div>
        <!-- 监控 -->
        <div class="inspection-box inspection-box-c">
          <div class="box-header">xxxx</div>
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="pagination"
            :row-class-name="(record:any, index:any) => (index % 2 === 1 ? 'table-striped' : null)"
            class="common-table sm-table"
          >
            <template #name="{ text }">
              <a>{{ text }}</a>
            </template>
          </a-table>
        </div>
        <!-- AI识别 -->
        <div class="inspection-box">
          <div class="box-header">xxxx</div>
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="pagination"
            :row-class-name="(record:any, index:any) => (index % 2 === 1 ? 'table-striped' : null)"
            class="common-table sm-table"
          >
            <template #name="{ text }">
              <a>{{ text }}</a>
            </template>
          </a-table>
        </div>
      </div>
      <!-- 地图 -->
      <div class="map" style="height: 300px; background-color: #fff">map</div>
    </a-col>
    <a-col :span="6" class="item-box">
      <!-- 快捷模块 -->
      <div class="fast-box">
        <div class="header">
          <span class="title">快捷应用</span>
        </div>
        <div class="fast">
          <template v-for="(item, i) in fastData" :key="i">
            <div v-if="i < 4" class="item" :style="{ background: item.bgColor }">
              <img class="icon" :src="item.icon" />
              <p class="text">{{ item.text }}</p>
            </div>
          </template>
        </div>
        <div class="fast fast-second">
          <template v-for="(item, i) in fastData" :key="i">
            <div v-if="i >= 4" class="item" :style="{ background: item.bgColor }">
              <img class="icon" :src="item.icon" />
              <p class="text">{{ item.text }}</p>
            </div>
          </template>
        </div>
      </div>
      <!-- 特殊模块 -->
      <div class="special-box">
        <div class="header">
          <span class="title">特殊作业</span>
        </div>
        <div class="special">
          <template v-for="(item, i) in specialData" :key="i">
            <div v-if="i < 4" class="item">
              <a-badge count="5">
                <img class="icon" :src="item.icon" />
              </a-badge>
              <p class="text">{{ item.text }}</p>
            </div>
          </template>
        </div>
        <div class="special fast-second">
          <template v-for="(item, i) in specialData" :key="i">
            <div v-if="i < 4" class="item">
              <a-badge count="5">
                <img class="icon" :src="item.icon" />
              </a-badge>
              <p class="text">{{ item.text }}</p>
            </div>
          </template>
        </div>
      </div>
      <!-- 消息模块 -->
      <ul class="message-box">
        <div class="header">
          <span class="title">消息通知</span>
        </div>
        <li v-for="(item, i) in messageData" :key="i">
          <span class="text">{{ item.text }}</span>
          <span class="date">{{ item.date }}</span>
        </li>
      </ul>
    </a-col>
  </a-row>
  <br /><br />
  多语言测试：
  <br /><br />
  <span @click="clc">{{ t('menu.home') }}</span>
  <br /><br />
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Moment } from 'moment';

const value = ref<Moment>();
const onPanelChange = (value: Moment, mode: string) => {
  console.log(value, mode);
};

const { t } = useI18n();

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: { customRender: 'name' },
    align: 'center',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
    align: 'center',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
    align: 'center',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
];
const riskData = [
  {
    num: 0,
    text: '重大风险',
    bgColor: '#d9001b',
    textColor: '#fff',
    numColor: '#fff',
  },
  {
    num: 12,
    text: '较大风险',
    bgColor: '#f59a23',
    textColor: '#fff',
    numColor: '#fff',
  },
  {
    num: 0,
    text: '一般风险',
    bgColor: '#ffff00',
    textColor: '#34a6ff',
    numColor: '#34a6ff',
  },
  {
    num: 0,
    text: '低风险',
    bgColor: '#0000ff',
    textColor: '#fff',
    numColor: '#fff',
  },
];
const fastData = [
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
];
const specialData = [
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
  {
    icon: 'https://img2.baidu.com/it/u=1342701199,2079596281&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg',
    text: '会议通知',
    bgColor: '#f59a23',
  },
];
const messageData = [
  {
    text: '[会议通知]公司会议通知',
    date: '2022-02-02',
  },
  {
    text: '[会议通知]公司会议通知',
    date: '2022-02-02',
  },
  {
    text: '[会议通知]公司会议通知',
    date: '2022-02-02',
  },
  {
    text: '[会议通知]公司会议通知',
    date: '2022-02-02',
  },
  {
    text: '[会议通知]公司会议通知',
    date: '2022-02-02',
  },
];
const pagination = false;
</script>

<style lang="less" scoped src="./_.less"></style>
