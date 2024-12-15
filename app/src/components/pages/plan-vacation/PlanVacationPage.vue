<template>
  <div>
    <NavBar />
    <div class="flex flex-col items-center justify-center h-screen space-y-6">
      <!-- Stepper Progress -->
      <div class="flex space-x-4">
        <span
          v-for="(step, index) in steps"
          :key="index"
          :class="['step', { active: index === currentStep }]"
        >
          {{ step.label }}
        </span>
      </div>

      <!-- Step Content -->
      <div v-if="currentStep === 0">
        <!-- Step 1: Destination -->
        <div class="text-center">
          <!-- Heading -->
          <h1 class="text-5xl text-color-brown mb-4">
            Plan your next vacation.
          </h1>
          <LocationSearch
            @submit="handleDestinationSubmit"
            :buttonLabel="'Continue'"
          />
        </div>
      </div>

      <div v-else-if="currentStep === 1">
        <!-- Step 2: Duration -->
        <BaseDurationInput @submit="handleDurationSubmit" />
      </div>

      <!--    <div v-else-if="currentStep === 2">-->
      <!--      &lt;!&ndash; Step 3: Budget &ndash;&gt;-->
      <!--      <BudgetInput @submit="handleBudgetSubmit" />-->
      <!--    </div>-->

      <!--    <div v-else-if="currentStep === 3">-->
      <!--      &lt;!&ndash; Step 4: Preferences &ndash;&gt;-->
      <!--      <PreferencesInput @submit="handlePreferencesSubmit" />-->
      <!--    </div>-->

      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import BaseDurationInput from '@/components/atoms/BaseDurationInput.vue';
import LocationSearch from '@/components/molecules/LocationSearch.vue';
import NavBar from '@/components/organisms/NavBar.vue';
import { defineComponent, ref } from 'vue';
import { useVacationInfoStore } from '@/store/vacationInfo';

export default defineComponent({
  components: {
    NavBar,
    LocationSearch,
    BaseDurationInput,
  },
  setup() {
    const currentStep = ref(1);
    const errorMessage = ref('');
    const vacationStore = useVacationInfoStore();

    const steps = [
      { label: 'Destination' },
      { label: 'Duration' },
      { label: 'Budget' },
      { label: 'Preferences' },
    ];

    const handleDestinationSubmit = (destination: string) => {
      vacationStore.setDestination(destination);
      currentStep.value++;
    };

    const handleDurationSubmit = (duration: {
      startDate: string;
      endDate: string;
    }) => {
      vacationStore.$patch({ duration });
      currentStep.value++;
    };

    return {
      steps,
      currentStep,
      handleDestinationSubmit,
      handleDurationSubmit,
      errorMessage,
    };
  },
});
</script>

<style scoped>
.step {
  padding: 0.5rem 1rem;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
}

.step.active {
  background-color: #c97b72;
}
</style>
