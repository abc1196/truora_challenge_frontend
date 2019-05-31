<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/domains">Recent Domains</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  overflow: hidden;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #6c757d;
}

#nav a.router-link-exact-active {
  color: #007bff;
}
</style>
