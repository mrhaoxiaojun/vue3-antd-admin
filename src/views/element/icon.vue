<template>
  <div class="icon__container">
    <div style="color: red">使用项目注意：</div>
    <br />
    <br />
    <div>
      项目使用VScode，配合Vue Volar extension Pack插件及eslint、Prettier - Code
      formatter，语法检查和美化插件、请安装 并配置好,部分vscode的settigns.json关键配置，请参考
      <pre>
        // 是否为JavaScript文件开启eslint检测
        "eslint.enable": true,
        // 保存之后进行lint
        "eslint.run": "onSave",
        // 是否启用eslint的调试模式
        "eslint.debug": true,
        "eslint.options": {
          "extensions": [".js", ".vue", ".ts", ".tsx"]
        },
        "eslint.validate": [
          "javascript",
          "vue",
          "html",
          "typescript",
          "typescriptreact"
        ],

        "editor.codeActionsOnSave": {
          "source.fixAll": true,
          // 文件保存时开启eslint自动修复程序
          "source.fixAll.eslint": true,
          // 文件保存时开启stylelint自动修复程序
          "source.fixAll.stylelint": true
        },
      </pre>
    </div>
    <br />
    ----------------------------------------------------------------------------------------------------------
    <br />
    <br />
    <br />
    <br />
    <p class="tip">
      说明：直接输入icon名称即可使用，简化了各个图标引入步骤。但是目前是全部引入icon的方案，后续会按需引入减少包的体积
    </p>
    <pre>&lta-icon type="AndroidOutlined" /&gt</pre>
    <ul class="icons">
      <li><a-icon type="AndroidOutlined" /></li>
      <li><a-icon type="AppleOutlined" /></li>
      <li><a-icon type="TwitterOutlined" /></li>
      <li><a-icon type="DropboxOutlined" /></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AIcon from '@/components/aicon/AIcon.vue';
export default defineComponent({
  name: 'ElIcon',
  components: {
    AIcon,
  },
  setup() {
    onMounted(() => {
      console.log(123);
    });
  },
});
</script>
<style lang="less" scoped>
.icon__container {
  padding: 20px;
  & .tip {
    font-size: 14px;
    font-weight: bold;
  }
  & pre {
    background-color: #f6f6f6;
    padding: 10px;
  }
  & .icons {
    display: flex;
    margin: 0;
    padding: 0;
    & li {
      margin-right: 10px;
      list-style: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
