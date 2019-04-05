// This demonstartes calling api using promise
var request = require('request');
var details;

function initilaize() {
  // Setting method, url and header for request
  var options = {
    //'method': 'GET',
    'url': url,
    'headers': {
      'Authorization': 'Token abcdefghijklmnopqrstuvwxyz',
      'Accept-Language': 'en'
    }
  };
  // Defining and returning a new promise
  return new Promise(function(resolve, reject) {
    // Performing a async task
    request.get(options, function(err, resp, body) {
      if(err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    })
  })
}

function main() {
  var initilaizePromise = initilaize();
  initilaizePromise.then(function(result) {
    details = result;
    console.log('Following are the api details');
    console.log(details);
  }, function(err) {
    console.log(err);
  })
}

main();
