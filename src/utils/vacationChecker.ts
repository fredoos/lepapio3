import { VacationMode } from '../types/settings';

export const isInVacationPeriod = (vacationMode?: VacationMode): boolean => {
  if (!vacationMode || !vacationMode.enabled) {
    return false;
  }

  if (!vacationMode.start_date || !vacationMode.end_date) {
    return vacationMode.enabled;
  }

  const now = new Date();
  const startDate = new Date(vacationMode.start_date);
  const endDate = new Date(vacationMode.end_date);

  return now >= startDate && now <= endDate;
};
