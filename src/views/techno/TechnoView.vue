<!--数码-->
<template>
<div>
  <!-- 商品列表开始 -->
  <el-row gutter="20">
    <el-col span="6" v-for="p in tableData">
      <el-card  style="width: auto; height: 310px">
        <div>
          <img class="p_img" :src="p.logo" width="50%" height="40%" alt="">
        </div>
        <div>
          <p style="font-size: 15px;margin-top:0;height: 38px">{{p.name}}</p>
        </div>
        <div style="color: #6c6c6c">
          <span>￥{{p.price}}</span>
          <span style="float: right">销量:{{p.sales}}件</span>
          <br>
          <span style="float: left">库存:{{p.productCount}}件</span>
          <br>
          <br>
          <span style="float: left">好评:{{p.positiveCommentCount}}个</span>
          <br>
          <br>
          <span style="float: left">{{p.description}}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <!-- 商品列表结束 -->
</div>

</template>

<script>
export default {
  data(){
    return{
      tableData:[]
    }
  },
  methods: {
    loadCommodity: function () {
      let url = "http://localhost:9080/commodity/mitomi/"+'数码';//
      //
      this.axios.create({headers:{'Authorization':localStorage
              .getItem('jwt')}}).get(url).then((response) => {
        console.log(response.data);
        let jsonResult = response.data;
        if (jsonResult.code == 20000) {
          this.tableData = jsonResult.data;
        } else {
          this.$message.error(jsonResult.message)
        }
      })
    },
  },
  mounted() {//已挂载，在created之后，在显示页面之前执行
    console.log("mounted")
    this.loadCommodity();
  }

}
</script>

<style scoped>
.p_img:hover {
  position: relative;
  bottom: 5px;
  /* 元素的阴影: x偏移值 y偏移值 浓度 范围 颜色 */
  box-shadow: 0 0 10px 5px #333;
}
/* 去掉自带的内边距 */
.el-table .el-table__cell {
  padding: 0;
}
template{
  font: 18px "Microsoft YaHei UI";
  margin: 0;
}

</style>