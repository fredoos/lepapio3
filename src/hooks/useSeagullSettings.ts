import { useState, useEffect } from 'react';

interface SeagullSettings {
  type: 'normal' | 'marin' | 'noel';
  fly_image_1: string;
  fly_image_2: string;
  fly_image_3: string;
  ground_image: string;
  enabled: boolean;
}

const seagullTypes = {
  normal: {
    fly_image_1: '/mouette_vol_bas.gif',
    fly_image_2: '/mouette_vol_milieu.gif',
    fly_image_3: '/mouette_vol_haut.gif',
    ground_image: '/mouette_sol.gif',
  },
  marin: {
    fly_image_1: '/mouette_marin_bas.gif',
    fly_image_2: '/mouette_marin_milieu.gif',
    fly_image_3: '/mouette_marin_haut.gif',
    ground_image: '/mouette_marin_sol.gif',
  },
  noel: {
    fly_image_1: '/mouette_noel_bas.gif',
    fly_image_2: '/mouette_noel_milieu.gif',
    fly_image_3: '/mouette_noel_haut.gif',
    ground_image: '/mouette_noel_sol.gif',
  }
};

const defaultSettings: SeagullSettings = {
  type: 'normal',
  ...seagullTypes.normal,
  enabled: true
};

export const useSeagullSettings = () => {
  const [settings, setSettings] = useState<SeagullSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const response = await fetch('/content/settings/seagull.yml');
        if (!response.ok) {
          console.warn('Impossible de charger les paramètres de la mouette, utilisation des valeurs par défaut');
          setSettings(defaultSettings);
          setLoading(false);
          return;
        }

        const yamlText = await response.text();
        const lines = yamlText.split('\n');
        const parsed: any = {};

        lines.forEach(line => {
          const match = line.match(/^(\w+):\s*(.+)$/);
          if (match) {
            const [, key, value] = match;
            if (key === 'enabled') {
              parsed[key] = value.trim() === 'true';
            } else if (key === 'type') {
              parsed[key] = value.trim();
            }
          }
        });

        const type = parsed.type === 'marin' ? 'marin' : parsed.type === 'noel' ? 'noel' : 'normal';
        const typeImages = seagullTypes[type];

        setSettings({
          type,
          ...typeImages,
          enabled: parsed.enabled !== undefined ? parsed.enabled : true
        });
      } catch (error) {
        console.error('Erreur lors du chargement des paramètres de la mouette:', error);
        setSettings(defaultSettings);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  return { settings, loading };
};
