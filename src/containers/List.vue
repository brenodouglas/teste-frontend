<template>
  <section class="col-6">
    <div class="row">
      <div class="col-12 mb-3">
        <h5 class="card-title">
          Issues
          <router-link tag="button" class="float-right btn btn-success btn-sm" to="/create">Nova issue</router-link>
        </h5>
      </div>
      <br>
      <div class="col-12" v-for="issue in issues" :key="issue.id">
        <div class="card">
          <div class="card-body">
            <p>
              <strong>{{ issue.title }}</strong>
            </p>
            <p>{{ issue.body }}</p>
            <p>
              <router-link tag="a" class="card-link" :to="{ name: 'Edit', params: {id: issue.number }}">Editar</router-link>
            </p>
          </div>
        </div>
        <br>
      </div>
    </div>
  </section>
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
