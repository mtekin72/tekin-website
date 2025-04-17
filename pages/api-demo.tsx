import React, { useEffect, useState } from 'react';

const API_BASE = 'https://task-manager-api.onrender.com'; // Use your deployed API base

export default function ApiDemo() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/tasks/`, {
      headers: {
        // For demo, assumes a public endpoint or you can provide a static JWT here
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('API error: ' + res.status);
        return res.json();
      })
      .then(setTasks)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Live Task API Demo</h1>
      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <ul className="space-y-2">
        {tasks.map((task: any) => (
          <li key={task.id} className="border p-3 rounded bg-gray-50">
            <strong>{task.title}</strong> <br />
            <span>{task.description}</span>
            <div>Status: {task.completed ? '✅ Completed' : '⏳ Pending'}</div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && !loading && !error && <p>No tasks found.</p>}
      <p className="mt-8 text-gray-500 text-sm">(This fetches live data from your deployed API.)</p>
    </div>
  );
}
