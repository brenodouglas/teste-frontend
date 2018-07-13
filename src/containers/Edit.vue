<template>
    <div>
      <h1>
        Editar
        --
        <router-link to="/">Voltar</router-link>
      </h1>

      <p>
        <input type="text" v-model="title" />
      </p>
      <p>
        <textarea v-model="body" cols="30" rows="10"></textarea>
      </p>
      <p>
          <button @click="lock" v-if="!issue.locked" >Lock</button>
          <button @click="unLock" v-if="issue.locked">Unlock</button>
      </p>
      <p>
        <button @click="save()" >Salvar</button>
      </p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Edit',
  computed: {
    ...mapState({ issue: state => state.issues.issue }),
    title: {
      get () {
        return this.$store.state.issues.issue.title
      },
      set (value) {
        this.$store.commit('issues/updateIssue', {...this.$store.state.issues.issue, title: value})
      }
    },
    body: {
      get () {
        return this.$store.state.issues.issue.body
      },
      set (value) {
        this.$store.commit('issues/updateIssue', {...this.$store.state.issues.issue, body: value})
      }
    }
  },
  created () {
    this.$store.dispatch('issues/getIssue', this.$route.params.id)
  },
  methods: {
    save () {
      this.$store.dispatch('issues/editIssue', this.issue)
      this.$router.push('/')
    },
    lock () {
      this.$store.dispatch('issues/lockIssue', this.issue)
    },
    unLock () {
      this.$store.dispatch('issues/unlockIssue', this.issue)
    }
  }
}
</script>
