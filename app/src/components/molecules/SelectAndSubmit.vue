<template>
  <div class="flex items-center space-x-2">
    <BaseSelect :options="options" v-model="selected" selectClass="w-40" />
    <button
      :class="[
        'px-4 py-2 bg-[#C97B72] text-white rounded hover:bg-[#A05C55] transition',
        buttonClass,
      ]"
      @click="handleClick"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script lang="ts">
import BaseSelect from '@/components/atoms/BaseSelect.vue';

export default {
  components: {
    BaseSelect,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    buttonLabel: {
      type: String,
      default: 'Submit',
    },
    buttonClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    handleClick() {
      this.$emit('submit', this.selected); // Emits the selected value on button click
    },
  },
};
</script>
