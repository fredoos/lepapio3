import { useState, useEffect } from 'react';
import { Settings, WeekSchedule } from '../types/settings';

const defaultSchedule: WeekSchedule = {
  monday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  },
  tuesday: {
    enabled: false,
    lunch: { enabled: false, start: '12:00', end: '14:00' },
    dinner: { enabled: false, start: '19:00', end: '22:00' }
  },
  wednesday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  },
  thursday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  },
  friday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  },
  saturday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  },
  sunday: {
    enabled: true,
    lunch: { enabled: true, start: '12:00', end: '14:00' },
    dinner: { enabled: true, start: '19:00', end: '22:00' }
  }
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>({
    opening_hours: defaultSchedule,
    logo_url: '/bateau.png',
    closure_note: 'Fermé le mardi',
    closure_note_en: 'Closed on Tuesday',
    hours_summary: '12h-14h / 19h-22h',
    hours_summary_en: '12pm-2pm / 7pm-10pm'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const hoursResponse = await fetch(`/content/settings/opening-hours.yml?t=${Date.now()}`);
      if (hoursResponse.ok) {
        const text = await hoursResponse.text();
        const lines = text.split('\n');
        const schedule: WeekSchedule = { ...defaultSchedule };

        let currentDay = '';
        let currentService = '';
        let inVacationSection = false;

        const vacationMode = {
          enabled: false,
          start_date: '',
          end_date: '',
          message: '',
          message_en: '',
          show_banner: true,
          banner_image_url: '/images/uploads/fermeture.gif'
        };

        lines.forEach(line => {
          if (line.match(/^vacation_mode:/)) {
            inVacationSection = true;
            currentDay = '';
            return;
          }

          if (inVacationSection) {
            const enabledMatch = line.match(/^\s+enabled:\s*(true|false)/);
            if (enabledMatch) {
              vacationMode.enabled = enabledMatch[1] === 'true';
            }
            const startDateMatch = line.match(/^\s+start_date:\s*["']?([^"'\n]+)["']?/);
            if (startDateMatch) {
              vacationMode.start_date = startDateMatch[1].trim();
            }
            const endDateMatch = line.match(/^\s+end_date:\s*["']?([^"'\n]+)["']?/);
            if (endDateMatch) {
              vacationMode.end_date = endDateMatch[1].trim();
            }
            const messageMatch = line.match(/^\s+message:\s*["']?([^"'\n]+)["']?/);
            if (messageMatch) {
              vacationMode.message = messageMatch[1].trim();
            }
            const messageEnMatch = line.match(/^\s+message_en:\s*["']?([^"'\n]+)["']?/);
            if (messageEnMatch) {
              vacationMode.message_en = messageEnMatch[1].trim();
            }
            const showBannerMatch = line.match(/^\s+show_banner:\s*(true|false)/);
            if (showBannerMatch) {
              vacationMode.show_banner = showBannerMatch[1] === 'true';
            }
            const bannerImageMatch = line.match(/^\s+banner_image_url:\s*["']?([^"'\n]+)["']?/);
            if (bannerImageMatch) {
              vacationMode.banner_image_url = bannerImageMatch[1].trim();
            }
            return;
          }

          const dayMatch = line.match(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday):/);
          if (dayMatch) {
            currentDay = dayMatch[1];
            inVacationSection = false;
            schedule[currentDay as keyof WeekSchedule] = {
              enabled: false,
              lunch: { enabled: false, start: '12:00', end: '14:00' },
              dinner: { enabled: false, start: '19:00', end: '22:00' }
            };
          }

          if (currentDay) {
            if (line.includes('enabled: true') && !line.includes('Service')) {
              schedule[currentDay as keyof WeekSchedule].enabled = true;
            }

            if (line.includes('lunch:')) currentService = 'lunch';
            if (line.includes('dinner:')) currentService = 'dinner';

            if (currentService && line.includes('enabled: true')) {
              schedule[currentDay as keyof WeekSchedule][currentService as 'lunch' | 'dinner'].enabled = true;
            }

            const startMatch = line.match(/start: "([^"]+)"/);
            if (startMatch && currentService) {
              schedule[currentDay as keyof WeekSchedule][currentService as 'lunch' | 'dinner'].start = startMatch[1];
            }

            const endMatch = line.match(/end: "([^"]+)"/);
            if (endMatch && currentService) {
              schedule[currentDay as keyof WeekSchedule][currentService as 'lunch' | 'dinner'].end = endMatch[1];
            }
          }
        });

        schedule.vacation_mode = vacationMode;

        setSettings(prev => ({
          ...prev,
          opening_hours: schedule
        }));
      }

      const generalResponse = await fetch(`/content/settings/general.yml?t=${Date.now()}`);
      if (generalResponse.ok) {
        const text = await generalResponse.text();
        const lines = text.split('\n');
        let logoUrl = '/bateau.png';
        let closureNote = 'Fermé le mardi';
        let closureNoteEn = 'Closed on Tuesday';
        let hoursSummary = '12h-14h / 19h-22h';
        let hoursSummaryEn = '12pm-2pm / 7pm-10pm';
        let specialLogoEnabled = false;
        let specialLogoUrl = '/lepapio_noel.png';
        let openingNote = '';
        let openingNoteEn = '';

        let inSpecialLogoSection = false;
        let currentSection = '';

        lines.forEach((line, index) => {
          const logoMatch = line.match(/^logo_url:\s*["']?([^"'\n]+)["']?/);
          if (logoMatch) {
            logoUrl = logoMatch[1].trim();
          }
          const closureMatch = line.match(/^closure_note:\s*["']?([^"'\n]+)["']?/);
          if (closureMatch) {
            closureNote = closureMatch[1].trim();
          }
          const closureEnMatch = line.match(/^closure_note_en:\s*["']?([^"'\n]+)["']?/);
          if (closureEnMatch) {
            closureNoteEn = closureEnMatch[1].trim();
          }
          const hoursMatch = line.match(/^hours_summary:\s*["']?([^"'\n]+)["']?/);
          if (hoursMatch) {
            hoursSummary = hoursMatch[1].trim();
          }
          const hoursEnMatch = line.match(/^hours_summary_en:\s*["']?([^"'\n]+)["']?/);
          if (hoursEnMatch) {
            hoursSummaryEn = hoursEnMatch[1].trim();
          }
          const openingNoteMatch = line.match(/^opening_note:\s*["']?([^"'\n]+)["']?/);
          if (openingNoteMatch) {
            openingNote = openingNoteMatch[1].trim();
          }
          const openingNoteEnMatch = line.match(/^opening_note_en:\s*["']?([^"'\n]+)["']?/);
          if (openingNoteEnMatch) {
            openingNoteEn = openingNoteEnMatch[1].trim();
          }

          if (line.match(/^special_logo:/)) {
            inSpecialLogoSection = true;
            currentSection = 'special_logo';
          } else if (line.match(/^[a-z_]+:/) && !line.match(/^\s/)) {
            inSpecialLogoSection = false;
            currentSection = '';
          }

          if (inSpecialLogoSection && currentSection === 'special_logo') {
            const enabledMatch = line.match(/^\s+enabled:\s*(true|false)/);
            if (enabledMatch) {
              specialLogoEnabled = enabledMatch[1] === 'true';
            }
            const specialLogoUrlMatch = line.match(/^\s+special_logo_url:\s*["']?([^"'\n]+)["']?/);
            if (specialLogoUrlMatch) {
              specialLogoUrl = specialLogoUrlMatch[1].trim();
            }
          }
        });

        setSettings(prev => ({
          ...prev,
          logo_url: logoUrl,
          closure_note: closureNote,
          closure_note_en: closureNoteEn,
          hours_summary: hoursSummary,
          hours_summary_en: hoursSummaryEn,
          opening_note: openingNote,
          opening_note_en: openingNoteEn,
          special_logo: {
            enabled: specialLogoEnabled,
            special_logo_url: specialLogoUrl
          }
        }));
      }

      setLoading(false);
    } catch (error) {
      console.error('Could not load settings from YAML:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
      setLoading(false);
    }
  };

  return { settings, loading, error, refetch: loadSettings };
};
