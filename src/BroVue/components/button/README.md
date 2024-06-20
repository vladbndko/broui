# Button

## Props
| Name     | Description      | Type                                                                    | Default     | 
|----------|------------------|-------------------------------------------------------------------------|-------------|
| class    | button css class | `any`                                                                   | `null`      |
| color    | custom hex color | `string`                                                                | `null`      |
| link     | custom hex color | `boolean`                                                               | `false`     |
| loading  | custom hex color | `boolean`                                                               | `false`     |
| outlined | custom hex color | `boolean`                                                               | `false`     |
| rounded  | custom hex color | `boolean`                                                               | `false`     |
| size     | button size      | `'small' \| 'medium' \| 'large'`                                        | `'medium'`  |
| style    | button css style | `any`                                                                   | `null`      |
| text     | button css style | `boolean`                                                               | `false`     |
| type     | button attr type | `'button' \| 'submit' \| 'reset'`                                       | `button`    |
| variant  | button size      | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |

## Methods
| Name      | Description  | 
|-----------|--------------|
| `focus()` | get focus    |
| `blur()`  | remove focus |

```vue
<script lang="ts">
import { BroButton } from '@vladbndko/brovue';
</script>
<template>
  <BroButton>Button</BroButton>
</template>
```
