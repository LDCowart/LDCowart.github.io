const users = []; // In-memory user data

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const user = users.find(u => u.username === username);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        document.getElementById('auth-message').textContent = `Welcome back, ${username}!`;
        updateLeaderboard();
    } else {
        document.getElementById('auth-message').textContent = 'User not found!';
    }
});

document.getElementById('register-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!users.find(u => u.username === username)) {
        const newUser = { username: username, balance: 1000 }; // Starting balance
        users.push(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        document.getElementById('auth-message').textContent = `Registered and logged in as ${username}!`;
        updateLeaderboard();
    } else {
        document.getElementById('auth-message').textContent = 'User already exists!';
    }
});
