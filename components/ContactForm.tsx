import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function ContactForm() {
  const { t } = useTranslation('common');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // This is a placeholder. For production, integrate with Formspree or similar.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="bg-white rounded-lg shadow p-6 max-w-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">{t('name')}</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">{t('email')}</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">{t('message')}</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">{t('send')}</button>
      {submitted && <div className="mt-4 text-green-600">Thank you! Your message has been sent.</div>}
    </form>
  );
}
