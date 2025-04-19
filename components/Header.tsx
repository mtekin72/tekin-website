import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/blog', label: t('blog') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/">
          <a className="flex items-center gap-2">
            <Image src="/images/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border border-primary" />
            <span className="text-2xl font-extrabold text-primary tracking-tight">Mustafa Tekin</span>
          </a>
        </Link>
        <ul className="flex space-x-4 md:space-x-7 font-semibold text-base">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a className={`px-2 py-1 rounded transition-colors ${router.pathname === href ? 'bg-primary text-white' : 'text-secondary hover:bg-blue-100'}`}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
