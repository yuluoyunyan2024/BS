<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const formData = reactive({
  inputName: '',
  inputPass: ''
})
const submitAndToHome = () => {
  router.replace('/Main/goods')
  // axios({
  //   url: '/api/admin/login-log',
  //   params: { name: formData.inputName, pass: formData.inputPass }
  // })
  //   .then((res) => {
  //     //跳转页面但不会在历史记录中留下新条目
  //     if (res.data.code == 0) router.replace('/Main/goods')
  //     else ElMessage('请检查账密！')
  //   })
  //   .catch((err) => {
  //     ElMessage('服务器异常！')
  //     console.error(err)
  //   })
}
</script>

<template>
  <div class="container">
    <el-form class="form" :model="formData" size="large">
      <el-form-item>
        <h1>“如意日化”线上销售系统后台</h1>
      </el-form-item>
      <el-form-item>
        <el-input class="formItem" v-model="formData.inputName" placeholder="请输入账户" />
      </el-form-item>
      <el-form-item>
        <el-input class="formItem" v-model="formData.inputPass" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button class="formItem" type="primary" @click="submitAndToHome">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #cfd3dc;
}
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  text-align: center;
}
.formItem {
  width: 25vw;
  margin-bottom: 2vh;
}
h1 {
  margin-bottom: 5vh;
  /* color: white; */
}
</style>
