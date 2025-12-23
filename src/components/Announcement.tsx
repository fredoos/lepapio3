import { useAnnouncement } from '../hooks/useAnnouncement';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertCircle } from 'lucide-react';

export default function Announcement() {
  const { announcement, loading } = useAnnouncement();
  const { language } = useLanguage();

  if (loading || !announcement || !announcement.show_announcement) {
    return null;
  }

  const title = language === 'fr' ? announcement.title : announcement.title_en;
  const description = language === 'fr' ? announcement.description : announcement.description_en;

  return (
    <div
      className="py-8 px-4"
      style={{ backgroundColor: announcement.background_color }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg shadow-lg overflow-hidden bg-white">
          <div className="md:flex">
            {announcement.image && (
              <div className="md:flex-shrink-0 md:w-1/3">
                <img
                  src={announcement.image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className={`p-8 ${announcement.image ? 'md:w-2/3' : 'w-full'}`}>
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {title}
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
