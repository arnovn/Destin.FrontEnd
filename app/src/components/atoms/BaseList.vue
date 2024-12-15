<template>
  <ul
    v-if="items.length > 0"
    class="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10"
  >
    <li
      v-for="item in limitedItems"
      :key="item.key"
      @click="$emit('itemClick', item)"
      class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array as () => Array<{ key: string | number; label: string }>,
      required: true,
    },
    maxResults: {
      type: Number,
      default: 5, // Default limit of results
    },
  },
  computed: {
    limitedItems() {
      return this.items.slice(0, this.maxResults); // Limit the items
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  transition: background-color 0.2s;
}
</style>
