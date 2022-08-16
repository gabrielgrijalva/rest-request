const http = require('http');
const https = require('https');
/**
 * @type {import('./typings/index')}
 */
const RestRequest = {
  send: (params) => {
    return new Promise(resolve => {
      const protocol = params.url.includes('http:') ? http : https;
      let data = '';
      const options = {
        method: params.method,
        headers: params.headers,
      };
      const req = protocol.request(params.url, options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            data = JSON.parse(data);
          } catch (error) { }
          resolve({
            data: data,
            status: res.statusCode,
            headers: res.headers,
          });
        });
      });
      req.on('error', (error) => {
        console.log(`Problem with request: ${error.message}`);
        throw error;
      });
      req.end(params.data);
    });
  }
};
module.exports = RestRequest;
