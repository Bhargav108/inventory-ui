<template>
  <div id="app">
    <div v-if="false" id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link>|
      <router-link :to="{ name: 'about'}">About</router-link>
    </div>
    <el-container style="height: 850px;">
      <el-container>
        <el-aside width="250px" class="sidebar"></el-aside>
        <el-main style="padding: 2%;">
          <el-header>
            <h4>Dashboard</h4>
          </el-header>
          <inventory-grid></inventory-grid>
        </el-main>
      </el-container>
    </el-container>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
