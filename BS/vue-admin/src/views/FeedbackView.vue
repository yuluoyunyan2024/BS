<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 此处用循环 -->
      <el-collapse-item title="花开富贵" name="1">
        <div>洗衣粉价格有点贵，希望能降降。૮(˶ᵔ ᵕ ᵔ˶)ა</div>
      </el-collapse-item>
      <el-collapse-item title="百年好合" name="2">
        <div>做的挺不错的，看好你哦！</div>
        <div>希望下次到货时间能更快些@_@</div>
      </el-collapse-item>
      <el-collapse-item title="棺木起飞" name="3">
        <div>不错不错，再接再厉！</div>
        <div>对了那个纸巾能一提一提地买吗？ᕙ(• ॒ ູ•)ᕘ</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.el-main .container {
  height: 100%;
  width: 100%;
}
::v-deep .el-collapse-item__header {
  box-sizing: border-box;
  padding-left: 5px;
}
.el-collapse-item div {
  padding-left: 5vw;
}
</style>
