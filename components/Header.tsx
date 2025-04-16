import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-xl font-bold text-primary">Mustafa Tekin</div>
        <ul className="flex space-x-6">
          <li><Link href="/"><span className={router.pathname === '/' ? 'text-primary' : ''}>{t('home')}</span></Link></li>
          <li><Link href="/portfolio"><span className={router.pathname === '/portfolio' ? 'text-primary' : ''}>{t('portfolio')}</span></Link></li>
          <li><Link href="/blog"><span className={router.pathname === '/blog' ? 'text-primary' : ''}>{t('blog')}</span></Link></li>
          <li><Link href="/resume"><span className={router.pathname === '/resume' ? 'text-primary' : ''}>{t('resume')}</span></Link></li>
          <li><Link href="/contact"><span className={router.pathname === '/contact' ? 'text-primary' : ''}>{t('contact')}</span></Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
