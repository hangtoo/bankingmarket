<template>
  <div class="hello">

    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>

    <view-box ref="viewBox">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <router-view></router-view>
      <tabbar slot="bottom" style="position:fixed"></tabbar>
    </view-box>


    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <divider>我是有底线的</divider>

    <grid>
      <grid-item label="Grid" v-for="i in 9">
      aaa
      </grid-item>
    </grid>
    <grid>
      <grid-item label="Grid" v-for="i in 2">
        bbb
      </grid-item>
    </grid>

    <flexbox>
      <flexbox-item label="flexbox" v-for="i in 2">
        bbb
      </flexbox-item>
    </flexbox>


    <sticky scroll-box="vux_view_box_body" :offset="46">
      <div>Blabla</div>
    </sticky>

    <timeline>
			<timeline-item>
				<h4 class="recent">【广东】 广州市 已发出</h4>
				<p class="recent">2016-04-17 12:00:00</p>
			</timeline-item>
			<timeline-item>
				<h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
				<p>2016-04-16 10:23:00</p>
			</timeline-item>
			<timeline-item>
				<h4> 商家正在通知快递公司揽件</h4>
				<p>2016-04-15 9:00:00</p>
			</timeline-item>
		</timeline>

    <tabbar style="position:fixed">
      <tabbar-item selected>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot link="/HelloFromVux">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item  link="/HelloFromVux">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>



  </div>

</template>

<script>

import { Tab, TabItem, Divider,Grid, GridItem,Flexbox,FlexboxItem,Sticky,ViewBox,Tabbar, TabbarItem,XHeader,Timeline,TimelineItem } from 'vux'

export default {
  name: 'HelloWorld',
  components: {
    Tab,
    TabItem,
    Divider,
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem,
    Sticky,
    ViewBox,
    Tabbar,
    TabbarItem,
    XHeader,
    Timeline,
    TimelineItem,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
