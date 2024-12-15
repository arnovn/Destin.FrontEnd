<template>
  <div class="flex flex-col space-y-2 relative">
    <div class="flex items-center space-x-2">
      <div class="relative w-full">
        <BaseInputField
          id="location-search"
          type="text"
          placeholder="Search location..."
          v-model="searchTerm"
          @input="handleInput"
          class="w-full"
        />
        <!-- Dropdown for options -->
        <BaseList
          :items="optionsFormatted"
          :maxResults="5"
          @itemClick="selectOption"
        />
      </div>

      <!-- Submit Button -->
      <BaseButton
        mode="px-4 py-2 bg-color-pink text-white rounded hover:bg-color-pink-hover transition"
        @click="handleSubmit"
      >
        {{ buttonLabel }}
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { debounce } from 'lodash';
import BaseButton from '@/components/atoms/BaseButton.vue';
import BaseInputField from '@/components/atoms/BaseInputField.vue';
import BaseList from '@/components/atoms/BaseList.vue';
import { locationService } from '@/services/locationService';
import { useVacationInfoStore } from '@/store/vacationInfo';

export default {
  components: {
    BaseButton,
    BaseInputField,
    BaseList,
  },
  props: {
    buttonLabel: {
      type: String,
      default: 'Submit',
    },
  },
  data() {
    return {
      searchTerm: '',
      options: [] as Array<{ label: string; value: string }>,
      selected: '',
      fetchLocationsDebounced: null as (() => void) | null,
    };
  },
  created() {
    this.fetchLocationsDebounced = debounce(this.fetchLocations, 300);
  },
  computed: {
    optionsFormatted() {
      return this.options.map((opt) => ({ key: opt.value, label: opt.label }));
    },
  },
  methods: {
    handleInput() {
      if (this.searchTerm.trim() !== '') {
        this.fetchLocationsDebounced?.();
      } else {
        this.options = [];
      }
    },
    async fetchLocations() {
      this.options = await locationService.searchLocations(this.searchTerm);
    },
    selectOption(option: { key: string; label: string }) {
      this.searchTerm = option.label;
      this.selected = option.label;
      this.options = [];
    },
    handleSubmit() {
      if (this.selected) {
        const vacationStore = useVacationInfoStore();
        vacationStore.setDestination(this.selected); // Update store with selected value
        this.$emit('submit', this.selected);
        this.$router.push('/plan-vacation');
      } else {
        alert('Please select a location before submitting.');
      }
    },
  },
};
</script>
