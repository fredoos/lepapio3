import { useState, useEffect } from 'react';

interface Announcement {
  show_announcement: boolean;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  image?: string;
  background_color: string;
}

export const useAnnouncement = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const response = await fetch('/content/settings/announcement.yml');
        const text = await response.text();

        const lines = text.split('\n');
        const data: any = {};

        lines.forEach(line => {
          const match = line.match(/^(\w+):\s*(.*)$/);
          if (match) {
            const key = match[1];
            let value: any = match[2].replace(/^["']|["']$/g, '');

            if (value === 'true') value = true;
            if (value === 'false') value = false;

            data[key] = value;
          }
        });

        setAnnouncement(data as Announcement);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'annonce:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnnouncement();
  }, []);

  return { announcement, loading };
};
