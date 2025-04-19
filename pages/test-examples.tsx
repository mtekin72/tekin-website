import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const testCategories = [
  {
    name: 'E2E Testing',
    tools: [
      {
        tool: 'Playwright',
        language: 'TypeScript',
        example: `import { test, expect } from '@playwright/test';\ntest('homepage loads', async ({ page }) => {\n  await page.goto('https://example.com');\n  await expect(page).toHaveTitle(/Example Domain/);\n});`
      },
      {
        tool: 'Cypress',
        language: 'JavaScript',
        example: `describe('homepage', () => {\n  it('loads', () => {\n    cy.visit('https://example.com');\n    cy.contains('Example Domain');\n  });\n});`
      }
    ]
  },
  {
    name: 'API Testing',
    tools: [
      {
        tool: 'Playwright',
        language: 'TypeScript',
        example: `import { test, expect } from '@playwright/test';\ntest('login API', async ({ request }) => {\n  const res = await request.post('https://reqres.in/api/login', {\n    data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }\n  });\n  expect(res.ok()).toBeTruthy();\n});`
      },
      {
        tool: 'Postman',
        language: 'JSON',
        example: `{
  "method": "POST",
  "url": "https://reqres.in/api/login",
  "body": {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
}`
      }
    ]
  },
  {
    name: 'UI Testing',
    tools: [
      {
        tool: 'Selenium',
        language: 'Java',
        example: `@Test\npublic void testLogin() {\n  driver.get("https://shop.com/login");\n  driver.findElement(By.id("user")).sendKeys("testuser");\n  driver.findElement(By.id("pass")).sendKeys("password");\n  driver.findElement(By.id("login")).click();\n  assertTrue(driver.findElement(By.id("welcome")).isDisplayed());\n}`
      }
    ]
  },
  {
    name: 'Backend Testing',
    tools: [
      {
        tool: 'Robot Framework',
        language: 'Robot',
        example: `*** Test Cases ***\nGet All Users\n    GET    https://reqres.in/api/users\n    Status Should Be    200`
      }
    ]
  },
  {
    name: 'Performance Testing',
    tools: [
      {
        tool: 'k6',
        language: 'JavaScript',
        example: `import http from 'k6/http';\nimport { check } from 'k6';\nexport default function () {\n  const res = http.get('https://reqres.in/api/users');\n  check(res, { 'status was 200': (r) => r.status === 200 });\n}`
      }
    ]
  }
];

export default function TestExamples() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-secondary text-center">Test Examples</h1>
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {testCategories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`px-4 py-2 rounded font-semibold border transition ${selected===idx ? 'bg-primary text-white' : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}`}
              onClick={() => setSelected(idx)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary">{testCategories[selected].name}</h2>
          {testCategories[selected].tools.map((tool, i) => (
            <div key={tool.tool} className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-lg">{tool.tool}</span>
                <span className="text-xs bg-gray-200 rounded px-2 py-1">{tool.language}</span>
              </div>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto"><code>{tool.example}</code></pre>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
