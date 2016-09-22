var assert = require('assert')
var crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}

//console.log('what are the curves', crypto.getCurves())

// transaction
var transaction = { from: 'alice', to: 'bob', what: 'red stamp', when: new Date().valueOf() }
var json = JSON.stringify(transaction)
console.log('transaction', json)

// Generate Alice's keys...
const alice = crypto.createECDH('secp521r1')
const alice_key = alice.generateKeys()

// Generate Bob's keys...
const bob = crypto.createECDH('secp521r1');
const bob_key = bob.generateKeys();

// Exchange and generate the secret...
const alice_secret = alice.computeSecret(bob_key);
const bob_secret = bob.computeSecret(alice_key);

console.log(alice_secret.toString('hex'), bob_secret.toString('hex'))
assert.deepStrictEqual(alice_secret, bob_secret)
