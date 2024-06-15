<script lang="ts" setup>
import { clsx } from 'clsx';
import { computed } from 'vue';

import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'medium',
});

const classes = computed(() =>
  clsx({
    'bro-button': true,
    [`is-${props.variant}`]: !props.color && props.variant,
    [`is-${props.size}`]: props.size,
    'is-outline': props.outline,
    'is-loading': props.loading,
  }),
);
</script>

<template>
  <button :class="classes">
    <slot />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque cum, cumque dolor eligendi est hic, in ipsam
    itaque iure maiores odio reprehenderit vel veniam vero. Neque provident qui saepe.
  </button>
</template>
