<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #9ecebe;
}

*{
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Patrick Hand", cursive;
  list-style: none;

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
