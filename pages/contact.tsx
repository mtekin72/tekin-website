import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('contact_me')}</h1>
        <ContactForm />
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Professional Contact Details</h2>
          <p>Email: <a href="mailto:mustafa.tekin@example.com" className="text-primary">mustafa.tekin@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-primary" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
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
