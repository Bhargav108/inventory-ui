<template>
  <div class="login-container">
    <h3>Sign in to get started.</h3>
    <!-- Here goes the form -->
    <el-form :model="form" ref="loginForm" :rules="rules">
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item v-show="errors.length">
        <ul>
          <li style="color: red;" v-for="(error, idx) in errors" :key="idx">{{ error }}</li>
        </ul>
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
import { mapActions } from "vuex";
export default {
  name: "login-form",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "enter valid email",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "password is required",
            trigger: "blur"
          }
        ]
      },
      errors: []
    };
  },
  methods: {
    ...mapActions(["login"]),
    submitLogin() {
      const { email, password } = this.form;
      if (email && password)
        this.login({ email, password })
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => {
            if (!this.errors.length) this.errors.push(err);
          });
    }
  }
};
</script>

<style scoped lang='scss'>
.login-container {
  margin: 2%;
  padding: 3%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>