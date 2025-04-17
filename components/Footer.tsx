import { useTranslation } from 'next-i18next';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-white/80 backdrop-blur shadow-inner py-8 mt-16 flex flex-col items-center">
      <div className="flex gap-6 mb-2">
        <a href="https://linkedin.com/in/mtekin72" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 text-2xl"><FaLinkedin /></a>
        <a href="https://github.com/mtekin72" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gray-800 text-2xl"><FaGithub /></a>
      </div>
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Mustafa Tekin. {t('all_rights_reserved')}</p>
    </footer>
  );
}
