import { mount } from '@vue/test-utils'
import CreateAccountForm from './CreateAccountForm.vue'

describe('CreateAccountForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(CreateAccountForm)
    expect(wrapper.exists()).toBe(true)
  })
})
