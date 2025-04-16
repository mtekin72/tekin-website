import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostPreview from '../components/BlogPostPreview';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const posts = [
  {
    title: 'The Importance of Test Automation in Agile',
    excerpt: 'Discover why test automation is crucial for agile teams and how it accelerates delivery.',
    date: '2024-12-01',
    slug: 'test-automation-agile'
  },
  // Add more posts as needed
];

export default function Blog() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('blog')}</h1>
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <BlogPostPreview key={idx} post={post} />
          ))}
        </div>
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
