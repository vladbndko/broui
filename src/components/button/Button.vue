<script lang="ts" setup>
import { clsx } from 'clsx';
import { computed } from 'vue';
import useUtils from '@/composables/useUtils';
import { ButtonProps } from '@/components/button/types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'medium',
});

const { isHexColor } = useUtils();

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
  </button>
</template>
