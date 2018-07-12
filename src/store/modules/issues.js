import Api from '@/api/github'

const state = {
  issues: [],
  issue: {}
}

const getters = {}

const actions = {
  async getAllIssues ({ commit }) {
    const response = await Api().get('issues')
    commit('setIssues', response.data)
  },
  async getIssue ({ commit }, number){
    const response = await Api().get('issue/'+number)
    commit('setIssue', response.data)
  },
  async editIssue ({ commit }, { number, title, body }) {
    const response = await Api().patch('issue/'+number, { title, body })
    commit('editIssue', response.data)
  },
  async lockIssue ({ commit }, { id, number }) {
    await Api().put('issue/'+number+'/lock')
    commit('lockIssue', {id, number})
  },
  async unlockIssue ({ commit }, { id, number }) {
    await Api().delete('issue/'+number+'/lock')
    commit('unlockIssue', {id, number})
  }
}

const mutations = {
  setIssues (state, issues) {
    state.issues = issues
  },
  setIssue (state, issue) {
    state.issue = issue
  },
  addIssue (state, newIssue) {
    state.issues.push(newIssue)
  },
  editIssue (state, {id, body, title}) {

  },
  lockIssue (state, { id, number }) {

  },
  unlockIssue (state, { id, number }) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
