<template>
  <el-dialog :title="title" :visible.sync="opened" width="30%" center>
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "dialog-form",
  props: ["title", "opened"]
};
</script>