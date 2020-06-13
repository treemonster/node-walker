#!/usr/bin/env node
const walk=require('.')
walk(__dirname, 9090)
console.log("server ready on http://127.0.0.1:9090/")
