<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  pass: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="container">
    <el-form class="form" :model="form" style="max-width: 30vw" size="large">
      <el-form-item>
        <el-input v-model="form.name" placeholder="原密码..." />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.pass" placeholder="新密码..." />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #cfd3dc;
}
.container .form {
  margin: 0 auto;
  margin-top: 25vh;
  padding: 5vw;
  border: 2px solid black;
  border-radius: 1vw;
}
</style>
