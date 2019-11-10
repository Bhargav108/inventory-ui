<template>
  <el-dialog :title="title" :visible.sync="opened" width="30%" center :destroy-on-close="true">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "dialog-form",
  props: ["title", "opened"]
};
</script>