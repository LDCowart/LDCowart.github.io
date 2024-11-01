function updateLeaderboard() {
    const user = getCurrentUser();
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = ''; // Clear current leaderboard
    if (users.length === 0) {
        leaderboardList.innerHTML = '<li>No users available</li>';
        return;
    }

    users.sort((a, b) => b.balance - a.balance); // Sort users by balance
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username}: $${user.balance}`;
        leaderboardList.appendChild(listItem);
    });
}
