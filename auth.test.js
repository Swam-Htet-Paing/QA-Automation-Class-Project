const { login } = require('./auth');

describe('Login Logic Tests', () => {

    test('should return true for valid credentials (admin / 123)', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('should return false for invalid username', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('should return false for invalid password', () => {
        expect(login('admin', 'wrongpass')).toBe(false);
    });

    test('should return false for empty inputs', () => {
        expect(login('', '')).toBe(false);
    });

});
