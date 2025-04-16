import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };
  return (
    <div className="flex gap-2 ml-4" role="group" aria-label="Language Switcher">
      {['en', 'nl'].map(lng => (
        <button
          key={lng}
          className={`px-4 py-1 rounded-full font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${i18n.language === lng ? 'bg-primary text-white border-primary' : 'bg-white/70 text-primary border-primary/30 hover:bg-primary/10'}`}
          onClick={() => changeLanguage(lng)}
          aria-label={`Switch to ${lng === 'en' ? 'English' : 'Dutch'}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
