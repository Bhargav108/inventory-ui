<template>
  <el-menu
    default-active="1"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    router="true"
  >
    <el-menu-item index="1">
      <i class="el-icon-menu" route="/inventory"></i>
      <span slot="title">Inventory</span>
    </el-menu-item>
    <el-menu-item index="2" route="/orders">
      <i class="el-icon-document"></i>
      <span slot="title">Orders</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting" route="/settings"></i>
      <span slot="title">Settings</span>
    </el-menu-item>
  </el-menu>
</template>