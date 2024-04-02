<script setup>
import { ref } from 'vue'
// import { doPUT } from '../util/Axios'
const tableData = ref([
  {
    _id: '658d63ea496909cec02f7d81',
    name: '茶花清洁布',
    price: 30,
    num: 5
  },
  {
    _id: '658d63ea496909cec02f7d82',
    name: '纪梵希口红',
    price: 300,
    num: 2
  }
])
</script>

<template>
  <el-table
    :data="tableData"
    stripe
    highlight-current-row
    :table-layout="'fixed'"
    show-overflow-tooltip
  >
    <el-table-column prop="_id" label="ID" width="200" />
    <el-table-column prop="name" label="名称" width="200" />
    <el-table-column prop="price" label="价格" width="200" />
    <el-table-column prop="num" label="数量" width="200" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <!-- <el-button link type="primary" size="small" @click.prevent="updateClick(scope.$index)">
            <RouterLink to="/goodsItem">确认货物已送达</RouterLink>
          </el-button
        > -->
        <el-button type="primary" size="small" @click.prevent="updateClick(scope.$index)">
          确认已送达
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
