/**
 * Validates login credentials.
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean}
 */
function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Attach event listener if running in browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('loginForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const message = document.getElementById('message');

                if (login(username, password)) {
                    message.style.color = 'green';
                    message.textContent = 'Login successful!';
                } else {
                    message.style.color = 'red';
                    message.textContent = 'Invalid username or password.';
                }
            });
        }
    });
}

// Export for Node / Jest testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
