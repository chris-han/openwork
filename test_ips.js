
const http = require('http');

const ips = ['192.168.31.1', '192.168.31.171', '172.24.64.1'];

ips.forEach(ip => {
    const options = {
      hostname: ip,
      port: 9222,
      path: '/json/version',
      method: 'GET',
      timeout: 2000
    };

    const req = http.request(options, (res) => {
      console.log(`SUCCESS ${ip}: STATUS: ${res.statusCode}`);
    });

    req.on('error', (e) => {
      console.log(`FAILED ${ip}: ${e.message}`);
    });
    
    req.on('timeout', () => {
        req.destroy();
        console.log(`TIMEOUT ${ip}`);
    });

    req.end();
});
