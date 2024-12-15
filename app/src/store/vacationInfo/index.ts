import { defineStore } from 'pinia';
import { vacationInfoState } from '@/store/vacationInfo/state';
import { actions } from '@/store/vacationInfo/actions';

export const useVacationInfoStore = defineStore('vactionInfo', {
  state: vacationInfoState,
  getters: {},
  actions: {
    setDestination(destination: string) {
      return actions.setDestination(this, destination);
    },
  },
});
