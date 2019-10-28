<template>
  <el-row :gutter="10">
    <el-col :span="18" class="hidden-xs-only branding_area full_height">
      <el-row class="logo-image_area">
        <el-col :span="18">
          <h2>Branding Image</h2>
        </el-col>
      </el-row>
      <el-row class="logo-desc_area">
        <el-col :span="8">
          <h2>Branding Desc</h2>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12" :xs="24">
      <el-row class="full_height" type="flex" align="middle">
        <el-col :span="24">
          <div class="login-container">
            <h3>Let's Get Started !</h3>
            <!-- Here goes the formmmmm -->
            <el-form ref="loginFormRef" :model="form">
              <el-form-item label="Username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitLogin">Login</el-button>
              </el-form-item>
              <span>
                <a href>Create a new account</a>
              </span>
            </el-form>
          </div>
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
      form: {
        username: "",
        password: ""
      },
      name: "Manju"
    };
  },
  methods: {
    submitLogin() {
      console.log(this.form.password);
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
.login-container {
  margin: 3%;
  padding: 3%;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.branding_area {
  background-image: url("https://source.unsplash.com/1600x900/?nature, water");
}
</style>
