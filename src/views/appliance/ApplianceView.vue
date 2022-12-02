<template>
<!--家电-->
  <el-row gutter="20">
    <el-col span="18">
      <!-- 走马灯开始 -->
      <el-carousel height="300px">
        <el-carousel-item v-for="b in bannerArr">
          <img :src="b.url" style="width: 100%;height: 100%">
        </el-carousel-item>
      </el-carousel>
      <!-- 走马灯结束 -->
    </el-col>
    <el-col span="6">
      <!-- 排行榜开始 -->
      <el-card style="height: 300px">
        <h3><i style="font-weight: bold" class="el-icon-trophy"></i>销量最高 </h3>
        <el-divider></el-divider>
        <el-table :data="topArr" style="width: 500px">
          <el-table-column label="排名" type="index" width="50px"></el-table-column>
          <el-table-column label="商品名">
            <template slot-scope="scope">
              <a href="" style="text-decoration: none;color: #333">
                {{scope.row.title}}
              </a>
            </template>
          </el-table-column>
          <el-table-column label="销量" prop="saleCount"></el-table-column>
        </el-table>
      </el-card>
      <!-- 排行榜结束 -->
    </el-col>
  </el-row>
  <!-- 商品列表开始 -->
  <el-row gutter="20">
    <el-col span="6" v-for="p in productArr">
      <el-card>
        <div>
          <img class="p_img" :src="p.url" width="100%" alt="">
        </div>
        <div>
          <p style="font-size: 15px;margin-top:0;height: 38px">{{p.title}}</p>
        </div>
        <div style="color: #6c6c6c">
          <span>￥{{p.price}}</span>
          <span style="font-size: 12px;text-decoration: line-through">{{p.oldPrice}}</span>
          <span style="float: right">销量:{{p.saleCount}}件</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <!-- 商品列表结束 -->
</template>

<script>
export default {
  name: "ApplianceView"
}
</script>

<style scoped>

</style>