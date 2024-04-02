<template>
  <el-button plain @click="dialogFormVisible = true">新增商品</el-button>
  <el-dialog v-model="dialogFormVisible" title="商品信息" width="500">
    <el-form :model="form">
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth">
        <el-input v-model="form.price" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品库存" :label-width="formLabelWidth">
        <el-input v-model="form.inventory" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品简介" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品图源" :label-width="formLabelWidth">
        <el-input v-model="form.imgSrc" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品类型" :label-width="formLabelWidth">
        <el-select v-model="form.type" placeholder="--请选择--">
          <el-option label="美容" value="美容" />
          <el-option label="日用" value="日用" />
          <el-option label="厨具" value="厨具" />
          <el-option label="护肤" value="护肤" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"> 保存 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  price: '',
  inventory: '',
  description: '',
  type: [],
  imgSrc: ''
})
</script>
