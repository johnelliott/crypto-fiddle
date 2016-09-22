const crypto = require('crypto')
const secret = '12345'
const cip = crypto.createCipher('aes192', secret)

console.log(cip)
process.stdin.pipe(cip).pipe(process.stdout)
