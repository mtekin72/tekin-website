import React from 'react';

const API_DOCS_URL = 'https://task-manager-api.onrender.com/docs'; // Use your deployed API docs URL

export default function ApiDocsPage() {
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <iframe
        src={API_DOCS_URL}
        title="Task Manager API Docs"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}
