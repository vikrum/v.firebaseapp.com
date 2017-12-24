const functions = require('firebase-functions');

exports.req = functions.https.onRequest((request, response) => {
  response.setHeader('content-type', 'application/json');
  response.send(JSON.stringify(request.headers, null, 2));
});

exports.rand = functions.https.onRequest((request, response) => {
  var rand = { };
  rand.uuid = uuid();
  rand.float = Math.random(); 
  rand.time = Date.now();
  response.setHeader('content-type', 'application/json');
  response.send(JSON.stringify(rand, null, 2));
});

function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
