<template>
  <el-row :gutter="10">
    <el-col :span="14" class="hidden-xs-only branding_area full_height">
      <el-row class="logo-image_area"></el-row>
      <el-row class="logo-desc_area">
        <el-col :span="24">
          <h2 style="color: white; font-size: 32px;">Inventory Made Simple.</h2>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="10" :xs="24">
      <el-row class="full_height" type="flex" align="middle">
        <el-col :span="24">
          <login-form></login-form>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    "login-form": LoginForm
  }
};
</script>

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
  padding: 3%;
}
.login-container {
  margin: 9%;
  padding: 3%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.branding_area {
  background-image: url("https://source.unsplash.com/1600x900/?nature, water");
}
</style>
