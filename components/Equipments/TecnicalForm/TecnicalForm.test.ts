import { mount } from '@vue/test-utils'
import TecnicalForm from './TecnicalForm.vue'

describe('TecnicalForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(TecnicalForm)
    expect(wrapper.exists()).toBe(true)
  })
})
