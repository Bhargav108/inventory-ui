<template>
  <el-row :gutter="10">
    <el-col :span="14" class="hidden-xs-only branding_area full_height">
      <el-row class="logo-image_area"></el-row>
      <el-row class="logo-desc_area">
        <el-col :span="24">
          <p class="logo-desc_text">Inventory Made Simple.</p>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="10" :xs="24">
      <el-row class="full_height" type="flex" align="middle">
        <el-col :span="24">
          <register-form></register-form>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "Register",
  components: {
    RegisterForm
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
.logo-desc_text {
  font-size: 28px;
  font-weight: 400;
  color: white;
  text-align: center;
}

.login-container {
  margin: 9%;
  padding: 6%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.branding_area {
  background-image: url("https://source.unsplash.com/1600x900/?nature,water");
  transition: background-image 1s ease-in-out;
}
</style>
