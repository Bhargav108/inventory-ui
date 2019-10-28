<template>
  <el-row :gutter="10">
    <el-col :span="12" class="bordered hidden-xs-only">
      <el-row>
        <el-col :span="12">
          <h2>Logo Area</h2>
        </el-col>
      </el-row>
      <el-row></el-row>
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
.branding_section {
  height: 95vh;
  display: flex;
  flex-direction: column;
}
.logo_img > img {
  height: 80px;
  width: 100px;
}
</style>
