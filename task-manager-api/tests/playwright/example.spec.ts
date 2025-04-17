import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:8000';

test.describe('Task Manager API', () => {
  let token = '';
  let taskId: number;

  test('Register user', async ({ request }) => {
    const res = await request.post(`${baseURL}/register`, {
      data: { username: 'playwrightuser', password: 'pwpass' },
    });
    expect([201, 400]).toContain(res.status()); // 400 if already registered
  });

  test('Login user', async ({ request }) => {
    const res = await request.post(`${baseURL}/login`, {
      form: { username: 'playwrightuser', password: 'pwpass' },
    });
    expect(res.status()).toBe(200);
    token = (await res.json()).access_token;
  });

  test('Create task', async ({ request }) => {
    const res = await request.post(`${baseURL}/tasks/`, {
      data: { title: 'PW Task', description: 'Playwright test' },
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.title).toBe('PW Task');
    taskId = body.id;
  });

  test('Get tasks', async ({ request }) => {
    const res = await request.get(`${baseURL}/tasks/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(200);
    const tasks = await res.json();
    expect(Array.isArray(tasks)).toBeTruthy();
  });

  test('Simulate 400 error', async ({ request }) => {
    const res = await request.get(`${baseURL}/tasks/simulate-error/400`);
    expect(res.status()).toBe(400);
  });
});
