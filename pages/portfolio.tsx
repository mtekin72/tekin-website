import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import RepoList from '../components/RepoList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const { t } = useTranslation('common');
  const [modal, setModal] = useState<null | number>(null);

  const projects = [
    {
      title: t('project1_title'),
      tools: ['Cypress','Playwright','Selenium', 'JUnit', 'Jenkins','Postman'],
      description: t('project1_desc'),
      image: '/images/project1.png',
      repo: 'https://github.com/mtekin72/playwright-api-testing-reqres'
    },
    {
      title: t('project2_title'),
      tools: ['Jenkins', 'Docker', 'JUnit'],
      description: t('project2_desc'),
      image: '/images/project2.png',
      repo: 'https://github.com/mtekin72/jenkins-cicd-pipeline-demo'
    },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-secondary text-center">{t('portfolio')}</h1>
        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group overflow-hidden"
              onClick={() => setModal(idx)}
            >
              <div className="h-48 w-full relative overflow-hidden">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-primary">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{tool}</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-10 transition" />
            </div>
          ))}
        </div>
        {/* Modal for Project Details */}
        {modal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setModal(null)}>
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold" onClick={() => setModal(null)}>&times;</button>
              <Image src={projects[modal].image} alt={projects[modal].title} width={500} height={250} className="rounded mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-primary">{projects[modal].title}</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {projects[modal].tools.map((tool, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{tool}</span>
                ))}
              </div>
              <p className="mb-4 text-gray-700">{projects[modal].description}</p>

              {projects[modal].repo && (
                <a
                  href={projects[modal].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                >
                  View on GitHub
                </a>
              )}
              {projects[modal].repo && (
                <a
                  href={projects[modal].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        )}
        {/* GitHub Repositories */}
        <section className="mt-16">
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

// Dummy change to trigger redeploy
}
