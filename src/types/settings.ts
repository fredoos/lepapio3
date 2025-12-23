export interface ServiceHours {
  enabled: boolean;
  start: string;
  end: string;
}

export interface DaySchedule {
  enabled: boolean;
  lunch: ServiceHours;
  dinner: ServiceHours;
}

export interface VacationMode {
  enabled: boolean;
  start_date?: string;
  end_date?: string;
  message?: string;
  message_en?: string;
  show_banner?: boolean;
  banner_image_url?: string;
}

export interface WeekSchedule {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
  vacation_mode?: VacationMode;
}

export interface SpecialLogo {
  enabled: boolean;
  special_logo_url: string;
}

export interface Settings {
  opening_hours: WeekSchedule | null;
  logo_url: string | null;
  primary_color?: string | null;
  secondary_color?: string | null;
  closure_note?: string | null;
  closure_note_en?: string | null;
  hours_summary?: string | null;
  hours_summary_en?: string | null;
  restaurant_name?: string;
  special_logo?: SpecialLogo;
  opening_note?: string | null;
  opening_note_en?: string | null;
}
