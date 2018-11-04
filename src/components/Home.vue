<template>
<div>

  <div>
    <flexbox >
    <flexbox-item class="filterboxicon"><div><img class="filtericon" slot="icon" src="../assets/home/3000.png"></div></flexbox-item>
    <flexbox-item class="filterboxicon"><div><img class="filtericon" slot="icon" src="../assets/home/5000.png"></div></flexbox-item>
    <flexbox-item class="filterboxicon"><div><img class="filtericon" slot="icon" src="../assets/home/10000.png"></div></flexbox-item>
    <flexbox-item class="filterboxicon"><div><img class="filtericon" slot="icon" src="../assets/home/10000+.png"></div></flexbox-item>
    </flexbox>
  </div>

  <div style="float:left;margin-top:3px;">
    <img class="margueeicon" slot="icon" src="../assets/home/rm.png">
  </div>
  <div style="position:relative;float:left;clear:right;margin-left:15px;">
    <marquee>
      <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
  </div>

  <div style="position:relative;float:left;clear:left;width:100%;">
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
  </div>

 <cell title="热门产品" is-link link="/loan" ></cell>

 <div >
  <flexbox style="border-top: 1px solid #f2f2f2;">
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


 </div>





  <tabbar style="position:fixed">
    <tabbar-item selected link="/home">
      <img slot="icon" src="../assets/home/sy-d.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/loan">
      <img  slot="icon" src="../assets/home/jd.png">
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
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Marquee,
  MarqueeItem,
  Flexbox,
  FlexboxItem,
  Swiper,
  Cell,
  Group,
  Panel,
  CellBox,
  Divider,
} from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
export default {
  components: {
    Tabbar,
    TabbarItem,
    Marquee,
    MarqueeItem,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    Swiper,
    Cell,
    Group,
    Panel,
    CellBox,
    Divider,
  },
  data() {
    return {
      demo01_list: baseList,
      demo01_index: 0,
      hotlist: [{
        src: 'https://image.freedk.com/pic/image/8a9b090e5f4c6a77015fa366a0f5003b.png',
        fallbackSrc: '',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'https://image.freedk.com/pic/image/317abdfcaaf94cb7bb0b8c751c38dfe7.png',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      hottype: '5',
      hotheader:'热门产品',
      hotfooter: {
      }

    }
  },

  methods: {
    demo01_onIndexChange(index) {
      this.demo01_index = index
    },
    onImgError(item, $event) {
      console.log(item, $event)
    }
  }
}
</script>

<style scoped lang="less">
.filterboxicon {
  padding-left: 10px;
  padding-top:5px;
}
.filtericon {
  align:center;
  width: 90%;
}
.hotprodimg {
  align:center;
  width: 70%;
}

.margueeicon {
  width: 18px;
  height: 18px;
  margin-left: 5px;
}

.swiper-demo-img img {
  width: 100%;
}
</style>
