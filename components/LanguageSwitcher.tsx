import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <div>
      {locales?.map((lng) => (
        <button
          key={lng}
          className={`mx-1 px-2 py-1 rounded ${locale === lng ? 'bg-primary text-white' : 'bg-gray-200 text-secondary'}`}
          onClick={() => router.push(asPath, asPath, { locale: lng })}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
