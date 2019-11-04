<template>
  <el-menu
    :default-active="defaultPage"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapsed"
    :router="true"
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
    <el-menu-item @click="logout">
      <i class="el-icon-switch-button"></i>
      <span slot="title">Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      defaultPage: "/inventory",
      isCollapsed: false
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>