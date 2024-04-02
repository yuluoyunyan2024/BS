<script setup>
import { reactive } from 'vue'

const tableData = reactive([
  {
    _id: '658d63ea496909cec02f7d81',
    name: 'testUser01',
    isException: true
  },
  {
    _id: '658d63ea496909cec02f7d82',
    name: 'testUser02',
    isException: false
  },
  {
    _id: '658d63ea496909cec02f7d82',
    name: 'testUser03',
    isException: false
  }
])
const postClick = (e) => {
  console.log('post:', e)
}
const removeClick = (e) => {
  console.log('delete:', e)
}
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
    <el-table-column prop="name" label="用户" width="200" />
    <el-table-column prop="isException" label="是否异常" width="200" />
    <el-table-column fixed="right" label="操作" width="auto">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="postClick(scope.$index)">
          加入黑名单</el-button
        >
        <el-button link type="primary" size="small" @click.prevent="removeClick(scope.$index)"
          >移出黑名单</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
