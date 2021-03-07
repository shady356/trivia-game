<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #2be;
}

*{
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: "Patrick Hand", cursive;
}

#app {
  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
