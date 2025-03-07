import { mount } from '@vue/test-utils'
import LoginForm from './LoginForm.vue'

describe('LoginForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.exists()).toBe(true)
  })
})
