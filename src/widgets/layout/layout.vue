<script lang="ts">
import {
  computed, defineComponent, ExtractPublicPropTypes,
} from 'vue';
import { DeviceType, isSmaller } from '@/shared/lib/mediaQuery';

const propsOptions = {
  rail: {
    type: Boolean,
    default: false,
  },
};

export type Props = ExtractPublicPropTypes<typeof propsOptions>;

export default defineComponent({
  props: propsOptions,

  setup() {
    const shouldAppBarVisible = computed(() => isSmaller(DeviceType.desktop).value);

    return {
      shouldAppBarVisible,
    };
  },
});
</script>

<template>
  <div class="layout">
    <main class="layout__main">
      {{ shouldAppBarVisible }}
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
  @import "../../shared/ui/transitions";
</style>
