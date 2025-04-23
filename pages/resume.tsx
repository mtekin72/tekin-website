import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const education = [
  {
    title: "Master of Arts",
    institution: "Faculty of Security Science-ANKARA",
    year: "2008-2010",
  },
  {
    title: "Bachelor's Degree",
    institution: "University of Security Science-Ankara",
    year: "1990-1994",
  },
];

const experience = [
  {
    title: 'QA / Software Test Automation Engineer',
    company: 'Bynder',
    year: '02.01.2024 - 31.12.2024',
    description: `
- Developed and maintained Cypress automation scripts for JavaScript-based tests, ensuring comprehensive test coverage for both legacy and modern environments.
- Conducted full end-to-end testing of backend processes and API endpoints, verifying asset conversions, uploads, downloads, and metadata management.
- Performed data migration testing for transitioning to the Bynder Object Store Systems (BOSS) environment, combining Cypress automation and manual validation techniques.
- Collaborated with backend teams to integrate tests into Jenkins CI/CD pipelines and GitHub workflows, optimizing test execution and improving product performance.
- Managed the Pull Request (PR) release process using GitHub, validating each release for quality assurance and maintaining smooth deployments.
- Used Jira and Xray for test case management, linking test cases to requirements and Epics, tracking execution, and visualizing defect distribution through dashboards.
- Extensively utilized Confluence for documenting test plans, test cases, test preparation, functionality details, and test data management.
    `
  },
  {
    title: 'QA / Software Test Automation Engineer',
    company: 'Basic Fit',
    year: '2021 - 2023',
    description: `
- Developed a Cypress-Cucumber BDD Test Automation Framework for Salesforce Commerce Cloud, improving test automation capabilities.
- Created and executed detailed test plans and test cases for Smoke, Functional, Positive, Negative, and Regression Testing.
- Collaborated with business analysts and developers for requirement analysis and design reviews to align business needs with testing outcomes.
- Worked closely with UI designers to ensure a seamless user experience and consistency in the interface.
- Conducted usability testing, gathering user feedback and identifying areas for UX/UI improvements.
- Conducted both frontend and backend testing on Salesforce Commerce Cloud, validating data flows and user interactions.
- Integrated Applitools for visual testing and JMeter for performance testing, ensuring UI consistency and application responsiveness.
- Performed hands-on manual and exploratory testing to uncover edge cases and unexpected behaviors.
- Worked in an Agile Scrum environment, participating in iterative testing cycles and sprint planning.
- Performed acceptance testing to validate business requirements before deployment.
- Used Jira for test case management, defect tracking, and sprint planning.
- Utilized Confluence extensively for documentation.
    `
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
