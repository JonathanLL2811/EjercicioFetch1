document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(data => {
            const usersTable = document.getElementById('usersTable');
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.name}</td>
                    <td><img src="${user.avatar}" alt="Avatar" class="img-thumbnail" width="50"></td>
                `;
                usersTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
