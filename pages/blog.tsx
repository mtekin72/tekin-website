import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const posts = [
  {
    title: 'The Importance of Test Automation in Agile',
    excerpt: 'Discover why test automation is crucial for agile teams and how it accelerates delivery.',
    date: '2024-12-01',
    slug: 'test-automation-agile',
    tags: ['Agile', 'Automation'],
    author: 'Mustafa Tekin'
  },
  {
    title: 'Continuous Integration Best Practices',
    excerpt: 'A practical guide to implementing CI for robust test automation workflows.',
    date: '2024-10-15',
    slug: 'ci-best-practices',
    tags: ['CI/CD', 'Jenkins'],
    author: 'Mustafa Tekin'
  },
];

export default function Blog() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-secondary text-center">{t('blog')}</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags?.map((tag, i) => (
                    <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2 text-primary">{post.title}</h2>
                <div className="text-gray-500 text-xs mb-2 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <p className="mb-4 text-gray-700 text-sm line-clamp-3">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <a className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Read more</a>
              </Link>
            </div>
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
