import Header from '../components/Header';
import Footer from '../components/Footer';
import RepoList from '../components/RepoList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
          <div className="flex-shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt="Mustafa Tekin Avatar"
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-secondary leading-tight">
              Mustafa Tekin
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary">
              {t('intro')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/portfolio">
                <a className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">{t('view_projects')}</a>
              </Link>
              <Link href="/resume">
                <a className="bg-white border border-primary text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition">{t('download_cv')}</a>
              </Link>
              <Link href="/contact">
                <a className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition">{t('contact_me')}</a>
              </Link>
            </div>
          </div>
        </div>
        {/* GitHub Repos Showcase */}
        <section className="w-full max-w-4xl mt-16">
          <RepoList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
