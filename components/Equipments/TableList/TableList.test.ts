import { mount } from '@vue/test-utils'
import TableList from './TableList.vue'

describe('TableList', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(TableList)
    expect(wrapper.exists()).toBe(true)
  })
})
