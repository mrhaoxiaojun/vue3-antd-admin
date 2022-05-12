<template>
  <a-upload
    name="file"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    :custom-request="customRequest"
    :disabled="disabled"
  >
    <a-avatar v-if="imageUrl" :size="128" shape="square" :src="imageUrl" />
    <div v-else>
      <loading-outlined v-if="loading" />
      <plus-outlined v-else />
      <div class="ant-upload-text">点击上传</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { UploadFun } from './type';
import { message } from 'ant-design-vue';
import { defineComponent, ref, watch, PropType } from 'vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'UploadImg',
  components: {
    LoadingOutlined,
    PlusOutlined,
  },

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    // 上传文件的api接口
    upload: {
      type: Function as PropType<UploadFun>,
      required: false,
      default: () => ({}),
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  emits: ['update:value', 'change'],
  setup(props, context) {
    const loading = ref<boolean>(false);
    const imageUrl = ref<string | undefined>('');

    if (props.value) {
      // eslint-disable-next-line vue/no-setup-props-destructure
      imageUrl.value = props.value;
    }

    watch(props, (data) => {
      imageUrl.value = data.value;
    });

    /**
     * @Desc: 自定义上传头像
     * @param { Object } data FormData对象
     */
    const customRequest = (data: any) => {
      if (props.upload) {
        loading.value = true;
        const formdata = new FormData();
        formdata.append('file', data.file);
        props
          .upload(formdata)
          .then((e) => {
            loading.value = false;
            context.emit('update:value', e.data.url);
          })
          .catch((err) => {
            loading.value = false;
            context.emit('update:value', '');
            message.error(err.message || err.data.message);
          });
      } else {
        message.error('请添加上传图片的接口');
      }
    };

    return { loading, imageUrl, customRequest };
  },
});
</script>
