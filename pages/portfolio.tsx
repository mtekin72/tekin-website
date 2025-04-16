import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import RepoList from '../components/RepoList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const projects = [
  {
    title: 'Automated UI Testing for E-commerce',
    tools: ['Selenium', 'JUnit', 'Jenkins'],
    description: 'Developed robust automated UI tests for an e-commerce platform, ensuring cross-browser compatibility and continuous integration.',
    codeSnippet: `@Test\npublic void testLogin() {\n  driver.get(\"https://shop.com/login\");\n  driver.findElement(By.id(\"user\")).sendKeys(\"testuser\");\n  driver.findElement(By.id(\"pass\")).sendKeys(\"password\");\n  driver.findElement(By.id(\"login\")).click();\n  assertTrue(driver.findElement(By.id(\"welcome\")).isDisplayed());\n}`,
    image: '/images/project1.png'
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const { t } = useTranslation('common');
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">{t('portfolio')}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <RepoList />
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
