<template>
  <div class="login-container">
    <h3>Sign up to get started.</h3>
    <!-- Here goes the form -->
    <el-form :model="form" ref="loginForm" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
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
        <el-button type="primary" size="medium" @click="createAccount">Sign Up</el-button>
      </el-form-item>
      <span style="color:green;">
        <a href="/login" style="color:green;">Already have an account ? Log in</a>
      </span>
      <br />
      <br />
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "register-form",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "enter valid name",
            trigger: "blur"
          }
        ],
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
    ...mapActions(["register"]),
    createAccount() {
      const { name, email, password } = this.form;
      this.register({ name, email, password })
        .then(() => {
          this.$notify({
            showClose: true,
            message: "Your account is ready for use 🙂. Login to continue.",
            type: "success"
          });
          this.$router.push("/login");
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