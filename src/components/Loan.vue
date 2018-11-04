<template>
<div>

  <x-header style="background-color:#f4f4f4;" :left-options="{showBack: false}">
    <span style="color:black;">产品中心</span>
  </x-header>

  <div>
    <flexbox style="background-color:white;height:3rem;">
      <flexbox-item class="filterboxicon">
        <div class="ui-select" @click="popshow=true" icon>金额排序</div>
      </flexbox-item>
      <flexbox-item class="filterboxicon">
        <div>通过率高</div>
      </flexbox-item>
      <flexbox-item class="filterboxicon">
        <div>额度最高</div>
      </flexbox-item>
    </flexbox>
  </div>

  <div>
    <popup v-model="popshow" position="bottom" should-scroll-top-on-show>

      <popup-header
      left-text="取消"
      right-text="确定"
      title="请选择排序方式"
      :show-bottom-border="popup_showbottomborder"
      @on-click-left="popshow = false"
      @on-click-right="popshow = false"></popup-header>

      <group gutter="0">
        <radio :options="orderway"></radio>
      </group>

    </popup>
  </div>





  <flexbox >
     <flexbox-item :span="1/4" class="filterboxicon" style="border-right: 1px solid #ddd;">
       <div  style="text-align:center"><img class="hotprodimg" slot="icon" src="https://image.freedk.com/pic/image/8a9b090e5f4c6a77015fa366a0f5003b.png"></div>
       <div style="text-align:center">点点金现金</div>

     </flexbox-item>
     <flexbox-item :span="3/4" class="filterboxicon" >
       <div style="margin-top:-15px;">额度：<span style="color:red">1000~50000</span>
       </div>
       <div style="padding-top:5px;">参考费率：0.075%（月）
       </div>
       <div style="padding-top:5px;">
         <div style="float:left;">
         期限：1~6月&nbsp;&nbsp;
       </div>
         <div style="float:left;border: 1px solid red; border-radius: 5px; width: 80px; color: red;line-height: 24px;text-align: center;">
          &nbsp;立即申请&nbsp;
        </div>
       </div>
     </flexbox-item>
   </flexbox>
   <flexbox >
     <flexbox-item class="filterboxicon" style="background: #f2f2f2;">
       <div style="text-align:center">银行放款，高额低息，快速安全</div>
     </flexbox-item>
  </flexbox>







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
import {
  XHeader,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  Flexbox,
  FlexboxItem,
  Popup,
  XSwitch,
  XButton,
  PopupHeader,
  Radio,
} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    Flexbox,
    FlexboxItem,
    Popup,
    XSwitch,
    XButton,
    PopupHeader,
    Radio,
  },
  data() {
    return {
      popshow:false,
      orderway:['金额排序','2000以下','2000-10000','10000-50000','50000以上'],
      popup_showbottomborder:true
    }
  },


}
</script>
<style scoped lang="less">

.ui-select{
  width: 90%;
}
.ui-select:after {
    position: absolute;
    margin-top: 0.6rem;
    margin-left:10px;
    width: 0;
    height: 0;
    border-top: 6px solid;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    color: #a6a6a6;
    content: "";
    pointer-events: none;
}




.filterboxicon {
  padding-left: 10px;
  padding-top:5px;
}
.hotprodimg {
  align:center;
  width: 70%;
}
</style>
