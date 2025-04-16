import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function ProjectCard({ project }: { project: any }) {
  const { t } = useTranslation('common');
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <div className="mb-2">
        <span className="font-bold">{t('tools_used')}: </span>
        {project.tools.join(', ')}
      </div>
      <div className="mb-2">
        <span className="font-bold">{t('project_description')}: </span>
        {project.description}
      </div>
      <div className="mb-2">
        <span className="font-bold">{t('code_snippet')}:</span>
        <pre className="bg-gray-100 p-2 rounded text-xs mt-1 overflow-x-auto">{project.codeSnippet}</pre>
      </div>
      {project.image && (
        <div className="mt-2">
          <Image src={project.image} alt={project.title} width={400} height={200} className="rounded" />
        </div>
      )}
    </div>
  );
}
