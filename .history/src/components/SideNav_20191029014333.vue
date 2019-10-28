<template>
  <el-menu
    :default-active="/dashboard"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    router="true"
  >
    <el-menu-item index="/dashboard">
      <i class="el-icon-menu"></i>
      <span slot="title">Dashboard</span>
    </el-menu-item>
    <el-menu-item index="/inventory">
      <i class="el-icon-files"></i>
      <span slot="title">Inventory</span>
    </el-menu-item>
    <el-menu-item index="orders">
      <i class="el-icon-document"></i>
      <span slot="title">Orders</span>
    </el-menu-item>
    <el-menu-item index="settings">
      <i class="el-icon-setting"></i>
      <span slot="title">Settings</span>
    </el-menu-item>
  </el-menu>
</template>