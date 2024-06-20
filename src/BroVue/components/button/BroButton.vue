<script lang="ts" setup>
import { computed, shallowRef, useAttrs } from 'vue';
import { clsx } from 'clsx';

import type { ButtonProps } from './types';

defineOptions({
  name: 'BroButton',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'medium',
});

// Refs
const buttonNodeRef = shallowRef<HTMLButtonElement>();

// Computed
const classes = computed(() =>
  clsx(
    'bro-button',
    {
      'is-iconic': props.iconic,
      'is-loading': props.loading,
      'is-outlined': props.outlined,
      'is-disabled': props.disabled,
      'is-rounded': props.rounded,
      [`is-${props.size}`]: props.size,
      [`is-${props.variant}`]: !props.color && props.variant,
    },
    props.class,
  ),
);

// Methods
function focus() {
  buttonNodeRef.value?.focus();
}

function blur() {
  buttonNodeRef.value?.blur();
}

defineExpose({
  focus,
  blur,
  nodeRef: buttonNodeRef,
});

useAttrs();
</script>

<template>
  <button
    ref="buttonNodeRef"
    :class="classes"
    :style="style"
    :disabled="disabled"
    :aria-disabled="disabled ? 'true' : 'false'"
  >
    <slot />
  </button>
</template>
