<template>
  <div class="col-6">
    <h5 class="card-title">
      Criar
    </h5>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="title">Titulo</label>
          <input type="text" class="form-control" v-model="issue.title" id="title" />
        </div>
        <div class="form-group">
          <label for="body">Descrição</label>
          <textarea class="form-control" v-model="issue.body" cols="30" rows="5" id="body"></textarea>
        </div>

        <button @click="save()" class="btn btn-success btn-sm float-right mt-2 ml-2">Salvar</button>
        <router-link tag="a" class="float-right btn btn-light mt-2 btn-sm" to="/"> Cancelar </router-link>
      </div>
    </div>
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
