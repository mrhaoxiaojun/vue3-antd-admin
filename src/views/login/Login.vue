<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">您好!</div>
          <br />
          <div class="login-container-title">欢迎来到简版前端通用框架</div>
          <a-form ref="formRef" :model="form" :rules="rules" @keyup.enter="handleSubmit">
            <a-form-item name="username">
              <a-input v-model:value="form.username" autocomplete="off" placeholder="请输入账号">
                <template #prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password
                v-model:value="form.password"
                autocomplete="off"
                placeholder="请输入密码"
              >
                <template #prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="handleSubmit()"> 登录 </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
    <!-- <div class="login-container-tips">基于vue3+ant-design-vue+vite+ts开发</div> -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, UnwrapRef } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { LoginFrom } from '@/types/views/login';

// 表单数据
const form = dataForm();

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change',
    },
  ],
});

const formRef = ref();

const store = useStore();

const router = useRouter();

/**
 * @desc: 登录提交
 * @param 无
 */
const handleSubmit = (): void => {
  formRef.value.validate().then(() => {
    store
      .dispatch('user/login', form)
      .then(() => {
        const route = router.currentRoute.value;
        console.log(route);
        const url = route.query.redirect || '/';
        router.push(url as string);
      })
      .catch((err) => {
        message.error(err.message || err.data.message);
      });
  });
};

function dataForm() {
  const form: UnwrapRef<LoginFrom> = reactive({
    username: undefined,
    password: undefined,
  });
  return form;
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('/src/assets/imgs/login/login_bg.png');
  background-size: cover;
  overflow: hidden;
  & .login-container-form {
    width: calc(100% - 40px);
    height: 400px;
    padding: 4vh;
    margin-top: calc((100vh - 380px) / 2);
    margin-right: 20px;
    margin-left: 20px;
    background: url('/src/assets/imgs/login/form_bg.png');
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    & .login-container-hello {
      font-size: 32px;
      color: #fff;
    }
    & .login-container-title {
      margin-bottom: 30px;
      font-size: 20px;
      color: #fff;
    }
  }
  .login-container-tips {
    position: fixed;
    bottom: 10px;
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.856);
    text-align: center;
  }
}
</style>
<style lang="less">
.login-container {
  & .login-container-form {
    & .ant-col {
      width: 100%;
      padding: 0 10px 0 10px;
    }
    & .ant-input {
      height: 35px;
    }
    & .ant-btn {
      width: 100%;
      height: 45px;
      border-radius: 99px;
    }
    & .ant-form-item-explain-error {
      color: #faad14;
    }
    & .ant-form-item-has-error {
      border-color: #faad14;
    }
  }
}
</style>
