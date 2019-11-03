<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.interceptors.response.use(response => {
      if (response.status === 401) this.$router.push("/login");
      return response;
    });
    const isLoggedIn = this.$store.getters["auth/isLoggedIn"];
    if (isLoggedIn) this.$routers.push("/");
  }
};
</script>
<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
