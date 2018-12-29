const request = require('request');

const options = {
  url: 'https://api.github.com/repos/request/request/pulls/2697',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(info);
    // console.log(info.stargazers_count + " Stars");
    // console.log(info.forks_count + " Forks");
  }
}

request(options, callback);
// /repos/:owner/:repo/pulls/:number/comments
