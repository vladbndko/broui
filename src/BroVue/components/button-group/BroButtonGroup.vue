<script lang="ts" setup>
import { computed } from 'vue';
import { clsx } from 'clsx';

import type { ButtonGroupProps } from './types';

defineProps<ButtonGroupProps>();

const classes = computed(() =>
  clsx({
    'bro-button-group': true,
  }),
);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
