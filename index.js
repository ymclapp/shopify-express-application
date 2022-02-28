'use strict';

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce');
const querystring = require('querystring');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'write_products';
const forwardingAddress = '{https://86e3-63-152-42-146.ngrok.io}';  //replace this with your HTTPS forwarding address

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});
