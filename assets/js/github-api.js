// pulls my latest activity from GH and posts onto my site

fetch('https://api.github.com/users/hectorbarquero/repos')
  .then(response => {
    if (!response.ok) {
      // debugging
      throw new Error('ERROR unable to fetch repositories');
    }
    return response.json();
  })
  .then(data => {
    const reposContainer = document.getElementById('github-repos');

    // clear and load in case val < hex 0x20 ie pub caret, nbsp, \n, \cr
    reposContainer.innerHTML = '';

    data.forEach(repo => {
      const repoElement = document.createElement('div');
      repoElement.classList.add('repo-item');
      // styling without needing too much new .css
      repoElement.innerHTML = `
        <h3 class="repo-title"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p class="repo-description">${repo.description || 'No description available.'}</p>
        <p class="repo-stats">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        <hr class="repo-divider" />
      `;
      reposContainer.appendChild(repoElement);
    });
  })
  .catch(error => {
    console.error('ERROR:', error);
  });