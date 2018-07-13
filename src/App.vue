<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark justify-content-center">
      <span class="navbar-text text-center">
        GITHUB ISSUES (/bdouglaans/teste-repository)
      </span>
    </nav>
    <br><br>
    <div class="container">
      <div class="row justify-content-center">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>
