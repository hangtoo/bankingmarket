<template>
  <div>
    <tabbar>
      <tabbar-item link="/home">
        <img slot="icon" src="../assets/home/sy.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected link="/loan">
        <img slot="icon" src="../assets/home/jd-d.png">
        <span slot="label">借款</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <img slot="icon" src="../assets/home/zx.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
