<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container>
      <el-header>
        <!-- 蓝色导航条开始 -->
        <div style="width: 100%;height: 60px;background-color: #82c8ec">
          <el-menu style="width: 1200px;margin: 0 auto"
                   default-active="1"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect"
                   background-color="#82c8ec"
                   text-color="#fff"
                   active-text-color="#fff">
            <el-menu-item v-for="c in categoryArr" :index="c.id">{{c.name}}</el-menu-item>
            <!-- 搜索框开始 -->
            <div style="float: right;margin-top: 15px">
              <el-input size="mini" placeholder="请输入关键字搜索"></el-input>
              <el-button style="position: absolute;background-color: rgba(0,0,0,0);border: 0;right: 0;top: 11px"
                         icon="el-icon-search"></el-button>
            </div>
            <!-- 搜索框结束 -->
          </el-menu>
        </div>
        <!-- 蓝色导航条结束 -->
        <div style="width: 1200px;margin: 0 auto">
          <img src="imgs/logo.png" style="width: 300px;vertical-align: middle">
          <span>
                    <a index='/mitomi/techno'>手机</a><el-divider direction="vertical"></el-divider>
                    <a index=''>热点咨询</a><el-divider direction="vertical"></el-divider>
                    <a index=''>商家入驻</a><el-divider direction="vertical"></el-divider>
                    <a index=''>社会招聘</a><el-divider direction="vertical"></el-divider>
                    <a index=''>校园招聘</a><el-divider direction="vertical"></el-divider>
                    <a index=''>帮助中心</a>
              <a style="margin-left: 150px; color: #85ce61" href="javascript:void(0)" @click="index()">商城后台管理</a><el-divider direction="vertical"></el-divider>
                    <a style="color: #8cc5ff" href="javascript:void(0)" @click="logout()">退出登录</a>
                </span>
        </div>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
