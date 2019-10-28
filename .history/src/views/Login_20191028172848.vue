<template>
  <el-row :gutter="10">
    <el-col :span="12" class="bordered hidden-xs-only">
      <div class="branding_section">
        <div class="logo_area"></div>
        <div class="content_are"></div>
      </div>
    </el-col>
    <el-col :span="12" :xs="24" class="bordered">
      <h4>Login Form</h4>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.bordered {
  border: 1px solid green;
}
.branding-section {
  height: 100vh;
}
</style>
