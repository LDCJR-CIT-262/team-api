const fetch = require('node-fetch');

const port = 3000;
const baseUrl = `http://localhost:${port}`;

// Start your server before running the tests
const server = require('./your-express-app-file'); // Replace with the actual file path

// Close the server after running the tests
afterAll(() => {
  server.close();
});

test('Test Express routes', async () => {
  const responseCody = await fetch(`${baseUrl}/Cody`);
  const nameCody = await responseCody.text();
  expect(nameCody).toBe('Hello Cody');
});
