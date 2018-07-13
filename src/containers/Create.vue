<template>
    <div>
      <h1>
        Create
        --
        <router-link to="/">Voltar</router-link>
      </h1>

      <p>
        <input type="text" v-model="issue.title" />
      </p>
      <p>
        <textarea v-model="issue.body" cols="30" rows="10"></textarea>
      </p>
      <p>
        <button @click="save()" >Salvar</button>
      </p>
    </div>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      issue: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('issues/createIssue', this.issue)
      this.$router.push('/')
    }
  }
}
</script>
