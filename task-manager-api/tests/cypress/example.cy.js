describe('Task Manager API', () => {
  const baseURL = 'http://localhost:8000';
  let token = '';
  let taskId;

  it('registers a user', () => {
    cy.request({
      method: 'POST',
      url: `${baseURL}/register`,
      body: { username: 'cypressuser', password: 'cyp123' },
      failOnStatusCode: false
    }).then((resp) => {
      expect([201, 400]).to.include(resp.status);
    });
  });

  it('logs in', () => {
    cy.request({
      method: 'POST',
      url: `${baseURL}/login`,
      form: true,
      body: { username: 'cypressuser', password: 'cyp123' }
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      token = resp.body.access_token;
    });
  });

  it('creates a task', () => {
    cy.request({
      method: 'POST',
      url: `${baseURL}/tasks/`,
      headers: { Authorization: `Bearer ${token}` },
      body: { title: 'Cypress task', description: 'desc' }
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      taskId = resp.body.id;
    });
  });

  it('gets tasks', () => {
    cy.request({
      method: 'GET',
      url: `${baseURL}/tasks/`,
      headers: { Authorization: `Bearer ${token}` }
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(Array.isArray(resp.body)).to.be.true;
    });
  });

  it('simulates 400 error', () => {
    cy.request({
      method: 'GET',
      url: `${baseURL}/tasks/simulate-error/400`,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(400);
    });
  });
});
