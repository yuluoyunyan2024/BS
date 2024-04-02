<script setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
</script>

<template>
  <el-container class="container">
    <!-- 左边目录栏宽度 -->
    <el-aside>
      <el-scrollbar>
        <el-menu :default-openeds="['1']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>常用服务
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/Main/goods">商品管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2"
                ><router-link to="/Main/orders">订单管理</router-link></el-menu-item
              >
              <el-menu-item index="1-3"
                ><router-link to="/Main/customer">用户管理</router-link></el-menu-item
              >
              <el-menu-item index="1-4"
                ><router-link to="/Main/feedback">反馈中心</router-link></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting /></el-icon>设置中心
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <RouterLink to="/Main/adminInfo">个人信息</RouterLink></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!-- 工作区 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
.container .el-aside {
  width: 200px;
  color: var(--el-text-color-primary);
  border-right: 2px grey solid;
}
.container .el-main {
  box-sizing: border-box;
  padding: 0;
  background-color: #cfd3dc;
}
</style>
