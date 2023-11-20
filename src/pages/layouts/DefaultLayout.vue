<script lang="ts">
import { defineComponent } from 'vue';
import { AppLayout } from '@/widgets/layout';

export default defineComponent({
  components: {
    AppLayout,
  },
});
</script>

<template>
  <div>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
