<template>
  <div class="login-container">
    <h3>Sign in to get started.</h3>
    <!-- Here goes the formmmmm -->
    <el-form ref="loginFormRef" :model="form">
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitLogin">Login</el-button>
      </el-form-item>
      <span>
        <a href="#" style="color:grey;">Trouble logging in ?</a>
      </span>
      <br />
      <br />
      <span>
        <a href="/register" style="color:green;">New here ? Get started for free.</a>
      </span>
    </el-form>
  </div>
</template>

<script>
</script>