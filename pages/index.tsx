import Header from '../components/Header';
import Footer from '../components/Footer';
import RepoList from '../components/RepoList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{t('intro')}</h1>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <Link href="/portfolio">
            <a className="bg-primary text-white px-6 py-4 rounded shadow hover:bg-blue-700 transition">{t('view_projects')}</a>
          </Link>
          <Link href="/blog">
            <a className="bg-secondary text-white px-6 py-4 rounded shadow hover:bg-gray-800 transition">{t('latest_blog')}</a>
          </Link>
          <Link href="/resume">
            <a className="bg-accent text-secondary px-6 py-4 rounded shadow hover:bg-gray-200 transition">{t('download_cv')}</a>
          </Link>
        </div>
        <RepoList />
      </main>
      <Footer />
    </>
  );
}

// For SSR translations
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
