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
  async getIssue ({ commit }, number) {
    const response = await Api().get(`issues/${number}`)
    commit('setIssue', response.data)
  },
  async createIssue ({ commit }, issue) {
    commit('clearIssue')
    await Api().post(`issues`, issue)
  },
  async editIssue ({ commit }, { number, title, body }) {
    commit('clearIssue')
    await Api().patch(`issues/${number}`, { title, body })
  },
  async lockIssue ({ commit }, issue) {
    await Api().put(`issues/${issue.number}/lock`)
    commit('updateIssue', { ...issue, locked: true })
  },
  async unlockIssue ({ commit }, issue) {
    await Api().delete(`issues/${issue.number}/lock`)
    commit('updateIssue', { ...issue, locked: false })
  }
}

const mutations = {
  setIssues (state, issues) {
    state.issues = issues
  },
  setIssue (state, issue) {
    state.issue = issue
  },
  clearIssue (state) {
    state.issue = {}
    state.issues = []
  },
  addIssue (state, newIssue) {
    state.issues.push(newIssue)
  },
  updateIssue (state, issue) {
    state.issue = issue
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
