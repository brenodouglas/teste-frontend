<template>
    <div class="col-6">
      <h5 class="card-title">
        Editar
      </h5>
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" class="form-control" v-model="title" id="title" />
          </div>

          <div class="form-group">
            <label for="body">Descrição</label>
            <textarea class="form-control" v-model="body" cols="30" rows="5" id="body"></textarea>
          </div>

          <div class="form-control text-center">
            <button @click="lock" class="btn btn-danger btn-sm" v-if="!issue.locked" >Lock</button>
            <button @click="unLock" class="btn btn-success btn-sm" v-if="issue.locked">Unlock</button>
          </div>

          <button @click="save()" class="btn btn-success btn-sm float-right mt-2 ml-2">Salvar</button>
          <router-link tag="a" class="float-right btn btn-light mt-2 btn-sm" to="/"> Cancelar </router-link>
        </div>
      </div>
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
