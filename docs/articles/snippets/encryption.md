# Encryption / Password Hashing

This requires a library called `sjcl`.

This will let you perform a PBKDF2 encryption.

You can install it in your package.json by doing: `npm install sjcl`

**Server Side**

```js
import sjcl from 'sjcl';

/**
 * Hash a password with pbkdf2
 * @param {string} password
 * @returns {string} A password hash.
 */
export function encryptPassword(password) {
    const saltBits = sjcl.random.randomWords(2, 0);
    const salt = sjcl.codec.base64.fromBits(saltBits);
    const key = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(password, saltBits, 2000, 256));
    return `${key}$${salt}`;
}

/**
 * Verify a password matches with pbkdf2.
 * @param {string} password
 * @param {string} storedPasswordHash
 * @returns {bool} true if correct password
 */
export function verifyPassword(password, storedPasswordHash) {
    const [_key, _salt] = storedPasswordHash.split('$');
    const saltBits = sjcl.codec.base64.toBits(_salt);
    const derivedKey = sjcl.misc.pbkdf2(password, saltBits, 2000, 256);
    const derivedBaseKey = sjcl.codec.base64.fromBits(derivedKey);

    if (_key != derivedBaseKey) {
        return false;
    }

    return true;
}

/**
 * Generate a hash based on string.
 * @param {string} data
 */
export function generateHash(data) {
    let hashBytes = sjcl.hash.sha256.hash(data + Math.random(0, 900000000));
    return sjcl.codec.hex.fromBits(hashBytes);
}

/**
 * Generate a persistent hash based on string.
 * @param {string} data
 */
export function persistentHash(data) {
    let hashBytes = sjcl.hash.sha256.hash(data);
    return sjcl.codec.hex.fromBits(hashBytes);
}
```

## Example Usage

**Server Side**

```js
const hash = encryptPassword('test');
const isCorrectPassword = verifyPassword('test', hash);

if (isCorrectPassword) {
    console.log(`That was a correct password.`);
}

const randomDataHash = generateHash(`whatever ${hash} ${isCorrectPassword}`);
console.log(randomDataHash);

const persistent = persistentHash(`whatever`);
const persistent2 = persistentHash(`whatever`);

if (persistent === persistent2) {
    console.log(`they match!`);
}
```