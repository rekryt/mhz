<template>
  <div :class="$style.tableBlock" ref="tableBlock">
    <div v-if="isScrollable" :class="$style.scrollMessage">Можно прокручивать вправо →</div>

    <table :class="$style.table" cellpadding="8" cellspacing="0" :border="0" ref="table">
      <thead>
        <tr>
          <th v-for="(header, index) in props.headers" :key="`header-${header}-${index}`" :class="$style.th">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface IProps {
  headers: string[];
}

const props = defineProps<IProps>();

const tableBlock = ref<HTMLElement>();
const table = ref<HTMLElement>();

const isScrollable = ref(false);

function checkTableSize(): void {
  if (tableBlock.value && table.value) {
    const tableBlockSize = Number(getComputedStyle(tableBlock.value).width.slice(0, -2));
    const tableSize = Number(getComputedStyle(table.value).width.slice(0, -2));

    isScrollable.value = tableSize > tableBlockSize;
  }
}

onMounted(() => {
  checkTableSize();
  window.addEventListener('resize', checkTableSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkTableSize);
});
</script>

<style module lang="scss">
.tableBlock {
  width: 100%;
  overflow-x: auto;
}

.scrollMessage {
  margin-bottom: 8px;
}

.table {
  width: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 8px;

  td {
    padding: 6px 16px;
    border-top: 1px solid var(--color-gray);

    &.cellLoading {
      border-bottom: 0;
    }
  }
}

.th {
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  background-color: var(--color-gray-light-extra);

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
}
</style>
