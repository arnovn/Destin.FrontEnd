import { VacationInfoState } from '@/types/vacation';

export const actions = {
  setDestination(store: VacationInfoState, destination: string) {
    store.destination = destination;
  },
};
