<template>
  <div style="background-color:white;">

  <div class="userheader">
    <div>
      <img src="../assets/user/grtx.png" style="position:absolute;width:80px;height:80px;margin:auto;top:0;bottom:0;left:0;right:0;"></img>
      <p style="text-align: center; padding-top: 10rem; font-size:1em; color:#fff">请登录</p>
    </div>

  </div>

  <group label-width="4.5em" label-margin-right="2em" style="margin-top:0;padding-top:0;" label-align="right">
    <cell title="我的申请" value="" is-link>
      <img slot="icon" src="../assets/user/sq.png">
    </cell>
    <cell icon="success" title="客服服务" value="" is-link value-align="left">
      <img slot="icon" src="../assets/user/kf.png">
    </cell>
    <cell title="关于我们" value="" is-link value-align="left">
      <img slot="icon" src="../assets/user/wom.png">
    </cell>
  </group>


    <tabbar>
      <tabbar-item link="/home">
        <img slot="icon" src="../assets/home/sy.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/loan">
        <img slot="icon" src="../assets/home/jd.png">
        <span slot="label">借款</span>
      </tabbar-item>
      <tabbar-item selected link="/user">
        <img slot="icon" src="../assets/home/zx-d.png">
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
<style scoped lang="less">
.userheader{
  background-image:url(../assets/user/grbj.png);
  background-repeat:no-repeat;
  background-size:100%;
  -moz-background-size:100%;
  height:14rem;
  width:100%;
  position:relative;
}


</style>
