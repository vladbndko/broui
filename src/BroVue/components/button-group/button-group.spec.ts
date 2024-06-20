import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BroButtonGroup from './BroButtonGroup.vue';

describe('BroButton', () => {
  it('Has default structure and classes', async () => {
    const wrapper = mount(BroButtonGroup, {
      slots: {},
    });
    wrapper.unmount();
  });
});
