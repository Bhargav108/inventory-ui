<template>
  <el-menu default-active="1" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">Inventory</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title" href="/orders">Orders</span>
    </el-menu-item>
    <el-menu-item index="3" href="/settings">
      <i class="el-icon-setting"></i>
      <span slot="title"></span>
    </el-menu-item>
  </el-menu>
</template>