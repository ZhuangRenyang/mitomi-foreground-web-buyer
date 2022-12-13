<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--    style="margin-left: 150px; color: #85ce61"-->
    <!--    style="color: #8cc5ff"-->
    <el-container>
      <el-header style="height: 90px; background-color: black">
        <div style="width: auto;height: 70px; margin: 0 auto;">
          <img src="../assets/logo.png" style="width: 200px;vertical-align: middle">
          <span>
                    <a href="">有品</a><el-divider direction="vertical"></el-divider>
                    <a href="">企业团购</a><el-divider direction="vertical"></el-divider>
                    <a href="">资质证照</a><el-divider direction="vertical"></el-divider>
                    <a href="">协议规则</a><el-divider direction="vertical"></el-divider>
                    <a href="">下载app</a><el-divider direction="vertical"></el-divider>
                    <a href="">Select Location</a>
                    <a style="margin-left: 150px" href="http://localhost:8081/">登录</a><el-divider
              direction="vertical"></el-divider>
                    <a href="javascript:void(0)" @click="logout()">注册</a><el-divider
              direction="vertical"></el-divider>
                    <a href="">消息通知</a>
                </span>
        </div>
      </el-header>
      <el-menu
          style="width: auto; height: 60px"
          router
          :default-active="this.$router.currentRoute.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

        <el-menu-item style="margin-left: 150px " index="/mitomi/techno">数码</el-menu-item>
        <el-menu-item index="/mitomi/food">食品</el-menu-item>
        <el-menu-item index="/mitomi/fresh">生鲜</el-menu-item>
        <el-menu-item index="/mitomi/appliance">家电</el-menu-item>
        <el-menu-item index="/mitomi/clothing">服装</el-menu-item>
        <el-menu-item index="/mitomi/industrialProducts">工业品</el-menu-item>
        <!-- 搜索框开始 -->
        <div style="float: right;margin-top: 16px">
          <el-input size="mini" placeholder="请输入关键字搜索"></el-input>
          <el-button style="position: absolute;background-color: rgba(0,0,0,0);border: 0;right: 0;top: 11px"
                     icon="el-icon-search"></el-button>
        </div>
        <!-- 搜索框结束 -->
      </el-menu>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer style="padding: 0">
        <div style="background-image: url('../assets/wave.png');height: 95px;margin-bottom: -30px"></div>
        <div style="background-color: #3f3f3f;height: 100px; font-size: 14px;color: #b1b1b1;
                text-align: center;padding: 30px">
          <p>Copyright © 杭州MiToMi商业有限公司版权所有 浙ICP备12003709号-3 浙公网安备 11010802029572号</p>
          <p>涵盖全国200家线下连锁店，致力于打造权威的网购商城平台</p>
          <p>MiToMi商城WWW.MiToMi.COM 专注于互联网商城</p>
        </div>
      </el-footer>
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
<style>
* {
  margin: 0;
}

header a {
  /* 去除下划线 */
  text-decoration: none;
  color: #6c6c6c;
}
</style>
