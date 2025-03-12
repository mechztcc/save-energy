import { mount } from '@vue/test-utils'
import CreateForm from './CreateForm.vue'

describe('CreateForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(CreateForm)
    expect(wrapper.exists()).toBe(true)
  })
})
