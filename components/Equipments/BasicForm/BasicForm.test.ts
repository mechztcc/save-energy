import { mount } from '@vue/test-utils'
import BasicForm from './BasicForm.vue'

describe('BasicForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(BasicForm)
    expect(wrapper.exists()).toBe(true)
  })
})
