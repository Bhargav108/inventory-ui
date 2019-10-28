<template>
  <el-row :gutter="10">
    <el-col :span="12" class="hidden-xs-only full_height">
      <el-row class="logo-image_area bordered">
        <el-col :span="12">
          <h2>Branding Image</h2>
        </el-col>
      </el-row>
      <el-row class="logo-desc_area bordered">
        <el-col :span="12">
          <h2>Branding Desc</h2>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12" :xs="24" class="fill_height">
      <el-row justify="center">
        <el-col :span="24" class="bordered">
          <h2>Hello</h2>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.bordered {
  border: 1px solid green;
}
.full_height {
  height: 100vh;
}
.logo-image_area {
  height: 30%;
  padding: 3%;
}
.logo-desc_area {
  height: 70%;
  margin: 3%;
}
</style>
