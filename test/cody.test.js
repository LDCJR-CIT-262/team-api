const fetch = require('node-fetch');

const port = 3000;
const baseUrl = `http://localhost:${port}`;

// Start your server before running the tests
const server = require('./your-express-app-file'); // Replace with the actual file path

test('Test Express route for Hello Cody', async () => {
  const response = await fetch(`${baseUrl}/Cody`);
  const name = await response.text();
  expect(name).toBe('Hello Cody');
});

