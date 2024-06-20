<script setup lang="ts">
import { IconPaperBag } from '@tabler/icons-vue';

import { useBroVue, BroButton } from './BroVue';

const broVue = useBroVue();
console.log(broVue);
</script>

<template>
  <div style="padding: 40px">
    <BroButton size="small" outline>Send <IconPaperBag /></BroButton>
    <br />
    <br />
    <BroButton outline loading>Send<IconPaperBag /></BroButton>
    <br />
    <br />
    <BroButton size="large" outline variant="info">Send <IconPaperBag /> </BroButton>
    <BroButton size="large" outline variant="success">Send <IconPaperBag /> </BroButton>
  </div>
</template>
