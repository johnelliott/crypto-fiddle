var crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}

// transaction
var transaction = { from: 'alice', to: 'bob', what: 'red stamp', when: new Date().valueOf() }
var json = JSON.stringify(transaction)
console.log(json)

const secret = '12345'

var cipher = crypto.createCipher('aes192', secret)
var encrypted = cipher.update(json, 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log('Encrypted', encrypted)

var decipher = crypto.createDecipher('aes192', secret)
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted', decrypted)
