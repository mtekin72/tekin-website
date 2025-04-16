import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Resume() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('resume')}</h1>
        <a href="/resume.pdf" download className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mb-6 inline-block">{t('download_cv')}</a>
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="list-disc ml-6">
            <li>BSc Computer Science, Example University, 2017-2021</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc ml-6">
            <li>Test Automation Engineer, Example Company, 2021-Present</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Selenium, JUnit, Jenkins, Java, JavaScript, Cypress, REST API Testing</li>
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc ml-6">
            <li>ISTQB Certified Tester</li>
          </ul>
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
