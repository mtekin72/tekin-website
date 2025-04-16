import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const education = [
  {
    title: 'BSc Computer Science',
    institution: 'Example University',
    year: '2017-2021',
  },
];

const experience = [
  {
    title: 'Test Automation Engineer',
    company: 'Example Company',
    year: '2021-Present',
    description: 'Developed and maintained automated test suites for web applications, integrated with CI/CD pipelines.'
  },
];

const skills = [
  'Selenium', 'JUnit', 'Jenkins', 'Java', 'JavaScript', 'Cypress', 'REST API Testing'
];

const certifications = [
  'ISTQB Certified Tester'
];

export default function Resume() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-secondary text-center">{t('resume')}</h1>
        <div className="flex flex-col items-center">
          <a href="/resume.pdf" download className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition mb-10 inline-block">{t('download_cv')}</a>
        </div>
        {/* Timeline Section */}
        <div className="max-w-2xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
            <ol className="relative border-l-4 border-primary">
              {education.map((edu, idx) => (
                <li key={idx} className="mb-10 ml-6">
                  <span className="absolute -left-2 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-white text-white font-bold">{idx+1}</span>
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold">{edu.title}</h3>
                    <div className="text-gray-700">{edu.institution}</div>
                    <div className="text-gray-400 text-xs">{edu.year}</div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
            <ol className="relative border-l-4 border-primary">
              {experience.map((exp, idx) => (
                <li key={idx} className="mb-10 ml-6">
                  <span className="absolute -left-2 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-white text-white font-bold">{idx+1}</span>
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <div className="text-gray-700">{exp.company}</div>
                    <div className="text-gray-400 text-xs">{exp.year}</div>
                    <div className="text-gray-600 text-sm mt-1">{exp.description}</div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Certifications</h2>
            <ul className="list-disc ml-6">
              {certifications.map((cert, idx) => (
                <li key={idx} className="text-gray-700 mb-2">{cert}</li>
              ))}
            </ul>
          </section>
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
