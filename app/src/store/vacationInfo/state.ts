import { VacationInfoState } from '@/types/vacation';

export const vacationInfoState = (): VacationInfoState => ({
  destination: '',
  duration: {
    startDate: null,
    endDate: null,
  },
  budget: null,
  preferences: [],
});
