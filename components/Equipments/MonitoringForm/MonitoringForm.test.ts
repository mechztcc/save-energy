import { mount } from '@vue/test-utils'
import MonitoringForm from './MonitoringForm.vue'

describe('MonitoringForm', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(MonitoringForm)
    expect(wrapper.exists()).toBe(true)
  })
})
