<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Setting } from '@element-plus/icons-vue'

//删
const removeClick = (index) => tableData.value.splice(index, 1)
////改
// let updateState = ref(false)

let router = useRouter()
// const updateClick = (index) => {
//   let id = tableData.value[index]._id
//   console.log('id:', id)
//   //做个页面跳转,附带参数
//   router.push({
//     path: '/Main/crud/update',
//     query: { id: id }
//   })
// }

const updateClick = (index) => {
  let id = tableData.value[index]._id
  console.log('id:', id)
  //做个页面跳转,附带参数
  router.push({
    path: '/Main/crud/update',
    query: { id: id }
  })
}

const tableData = ref([
  {
    _id: '658d63ea496909cec02f7d81',
    name: '茶花清洁布',
    price: 30,
    inventory: 300,
    type: '厨具',
    description: '刷碗真方便'
  },
  {
    _id: '658d6548496909cec02f7d83',
    name: '纪梵希口红',
    price: 300,
    inventory: 200,
    type: '化妆',
    description: '真好看呐'
  },
  {
    _id: '658d65af496909cec02f7d84',
    name: '洁柔小包纸巾',
    price: 5,
    inventory: 350,
    type: '日常',
    description: '小包更易携带哦'
  },
  {
    _id: '658d65f7496909cec02f7d85',
    name: '卡姿兰粉扑',
    price: 20,
    inventory: 100,
    type: '化妆',
    description: '用了都说好'
  },
  {
    _id: '658d6645496909cec02f7d86',
    name: '李白洗衣粉',
    price: 100,
    inventory: 500,
    type: '日常',
    description: '一洗就干净'
  }
])
</script>

<template>
  <el-header style="text-align: right; font-size: 12px">
    <div class="header">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><router-link to="/Main/crud/add">新增商品</router-link></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>其他</span>
    </div>
  </el-header>
  <!-- 
    数据，
    高度，
    斑马纹table，
    高亮当前行，
    设置表格单元、行和列的布局方式，
    隐藏额外内容
  -->
  <el-table
    :data="tableData"
    stripe
    highlight-current-row
    :table-layout="'fixed'"
    show-overflow-tooltip
  >
    <el-table-column prop="name" label="名称" width="200" />
    <el-table-column prop="price" label="价格" width="200" />
    <el-table-column prop="type" label="类型" width="200" />
    <el-table-column prop="inventory" label="库存" width="200" />
    <el-table-column prop="description" label="简介" width="450" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="updateClick(scope.$index)">
          <!-- <router-link to="/Main/crud/update">编辑</router-link></el-button
        > -->
          编辑</el-button
        >
        <el-button link type="primary" size="small" @click.prevent="removeClick(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.el-header {
  background-color: white;
  border-bottom: 2px solid black;
  color: black;
}
.header {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.el-menu {
  border-right: none;
}
</style>
