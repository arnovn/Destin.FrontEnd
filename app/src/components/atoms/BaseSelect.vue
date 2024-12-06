<template>
  <select
    :class="[
      'px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-[#C97B72] focus:outline-none',
      selectClass,
    ]"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true, // Array of options: [{ label: 'Option 1', value: '1' }]
    },
    modelValue: {
      type: [String, Number],
      default: '', // Two-way binding with v-model
    },
    selectClass: {
      type: String,
      default: '', // Custom class for additional styling
    },
  },
};
</script>
