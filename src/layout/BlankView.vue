<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script lang="ts" setup>

import useMapState from "@/hooks/useMapState"

const myState:any = useMapState({
  includeList: (state: any) => state.keepAlive.includeList
})

const { includeList } = myState

</script>


<!-- <script lang="ts">
import { mapState } from 'vuex'
import { computed ,defineComponent} from 'vue'

export default defineComponent({
  name: 'BlankView',
  computed: {
    ...mapState({
      includeList: (state: any) => state.keepAlive.includeList
    })
  }
})
</script> -->