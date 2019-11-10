<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { storage } from "@/utils";
import axios from "@/utils/axios";
export default {
  created() {
    axios.interceptors.response.use(response => {
      if (response.status === 401) this.$router.push("/login");
      return response;
    });
    const authInfo = storage.get("auth");
    const isLoggedIn = !!authInfo.email && !!authInfo.token;
    if (isLoggedIn) {
      const authInfo = storage.get("auth");
      // Set token in the header for future requests
      axios.defaults.headers.common = {
        Authorization: authInfo.token
      };
    }
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
