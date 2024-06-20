import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BroButton from './BroButton.vue';

describe('BroButton', () => {
  it('Has default structure and classes', async () => {
    const wrapper = mount(BroButton, {
      slots: {
        default: 'This is the button',
      },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.text()).toContain('This is the button');
    expect(wrapper.classes()).toContain('bro-button');
    expect(wrapper.classes()).toContain('is-default');
    expect(wrapper.classes()).toContain('is-medium');
    expect(wrapper.classes().length).toBe(3);

    wrapper.unmount();
  });
});
