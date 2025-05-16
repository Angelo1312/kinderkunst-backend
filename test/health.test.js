const https = require('https');

const options = {
  hostname: 'kinderkunst-backend.onrender.com',
  path: '/health',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode !== 200) {
    console.error('Health check failed');
    process.exit(1);
  } else {
    console.log('Health check passed');
  }
});

req.on('error', error => {
  console.error('Health check error:', error);
  process.exit(1);
});

req.end();
