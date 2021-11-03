const { createHash, scryptSync, randomBytes, timingSafeEqual } = require('crypto');

// simple check
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'p0mman';

const hash1 = hash(password);
console.log(hash1);

password = 'p0mman';
const hash2 = hash(password);

const match = hash1 === hash2;

console.log(match ? 'correct password' : 'wrong password');

// salted check
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
    
}