export type VacationInfoState = {
  destination: string | null;
  duration: {
    startDate: Date | null;
    endDate: Date | null;
  };
  budget: number | null;
  preferences: [string] | [];
};
