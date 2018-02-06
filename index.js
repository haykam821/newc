#!/usr/bin/env node

const getStdin = require('get-stdin');

getStdin().then(stdin => {
  console.log(stdin.replace(/\n/g, ", ").replace(/\z/, ""));
});
