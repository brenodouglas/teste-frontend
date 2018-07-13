<template>
  <div class="list">
    <h2>Issues <router-link to="/create">Nova</router-link></h2>
    <ul>
      <li v-for="issue in issues" :key="issue.id">
        {{ issue.id }} -- {{ issue.title }} -- {{ issue.body }} --
        <router-link :to="{ name: 'Edit', params: {id: issue.number }}">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'List',
  computed: mapState({
    issues: state => state.issues.issues
  }),
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('issues/getAllIssues')
  }
}
</script>

<style scoped>

</style>
