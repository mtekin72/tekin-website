import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-10 text-secondary text-center">{t('contact_me')}</h1>
        <div className="w-full max-w-xl">
          <ContactForm />
          <div className="mt-10 bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-primary">Professional Contact Details</h2>
            <div className="flex flex-col gap-3 items-center">
              <a href="mailto:mtekin72n@gmail.com" className="flex items-center gap-2 text-primary hover:underline text-base font-medium">
                <FaEnvelope /> mustafa.tekin@example.com
              </a>
              <a href="https://linkedin.com/in/mtekin72" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline text-base font-medium">
                <FaLinkedin /> linkedin.com/in/your-profile
              </a>
            </div>
          </div>
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
