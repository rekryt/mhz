<template>
  <header :class="$style.header">
    <RouterLink :to="URL_MAIN">
      <ImageLogo :class="$style.logo" />
    </RouterLink>

    <UiButton @click="logout">Выйти</UiButton>
  </header>
</template>

<script setup lang="ts">
import { UiButton } from 'mhz-ui';

import ImageLogo from '@/common/assets/images/logo.svg';
import { URL_MAIN } from '@/common/constants';
import { logout } from '@/auth/composables';
</script>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 16px 32px;
  border-bottom: 1px solid var(--color-gray-light);
}

.logo {
  display: block;
  width: 166px;
  height: 25px;
}
</style>
