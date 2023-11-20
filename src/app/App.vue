<script setup lang="ts">
import { UIToastContainer } from '@/shared/ui/UIToastBar';

</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <!-- TODO:  Loading state -->
    </template>
  </Suspense>
  <UIToastContainer />
</template>
