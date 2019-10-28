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
    <el-col :span="12" :xs="24" class="full_height">
      <el-row justify="center">
        <el-col :span="24" class="bordered">
          <!-- Here goes the formmmmm -->
          <el-form ref="loginForm" :model="loginForm">
            <el-form-item label="Username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitLogin">Login</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      name: "Manju"
    };
  },
  methods: {
    submitLogin(formName) {
      console.log(formName);
      console.log(this.$refs["loginForm"]);
    }
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
</style>
