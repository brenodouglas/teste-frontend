import Vue from 'vue'
import List from '@/containers/List'

describe('List.vue', () => {
  it('should render correct contents in list page', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.list h2').textContent)
      .to.equal('Issues')
  })
})
