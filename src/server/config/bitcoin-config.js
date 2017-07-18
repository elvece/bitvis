(function (bitConfig) {

  'use strict';

  bitConfig.init = function (app) {

    //bitcoin dependency
    const Client = require('bitcoin-core');
    //sets to main network
    const client = new Client({
      network: 'mainnet',
      host: 'localhost',
      username: process.env.USER_NAME,
      password: process.env.PWD
    });

    client.getInfo().then((help) => console.log(help));
  };

})(module.exports);
