const functions = require('firebase-functions');

exports.req = functions.https.onRequest((request, response) => {
  response.setHeader('content-type', 'application/json');
  response.send(JSON.stringify(request.headers, null, 2));
});
