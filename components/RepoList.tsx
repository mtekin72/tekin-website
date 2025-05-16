import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'next-i18next';

export default function RepoList() {
  const { t } = useTranslation('common');
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/mtekin72/repos?sort=updated')
      .then(res => setRepos(res.data.slice(0, 4))) // Show latest 4
      .catch(() => setRepos([]));
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{t('github_repos')}</h2>
      <ul className="space-y-2">
        {repos.map(repo => (
          <li key={repo.id} className="bg-white rounded p-4 shadow">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-primary font-bold">{repo.name}</a>
            <p className="text-gray-500 text-sm">{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
