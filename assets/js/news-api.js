// // this program abstracts the api key with a serverless function. My serverless function is included in my docs
// // the program will pull tech posts from news API org, but my api key is stored in an environment variable on my server.

// // fetch results, hide key NEWS_API_KEY
// fetch('https://whimsical-empanada-362b3f.netlify.app/.netlify/functions/news-api')
//   .then(response => {
//     if (!response.ok) {
//       // debugging - network err if fail
//       throw new Error('ERROR: Network response timeout');
//     }
//     return response.json();
//   })
//   .then(data => {
//     const articles = data.articles;
//     // load tagset news-container, a new tagset i added bc clear on news-posts will nuke content
//     const newsContainer = document.getElementById('news-container');

//     // clear and load in case val < hex 0x20 ie pub caret, nbsp, \n, \cr
//     newsContainer.innerHTML = '';

//     if (articles.length > 0) {
//       articles.forEach(article => {
//         const articleElement = document.createElement('div');
//         articleElement.classList.add('news-article');
//         // styling form-fit to existing .css
//         articleElement.innerHTML = `
//           <h3 class="post-ctrt-heading">${article.title}</h3>
//           <p class="justified-para">${article.description || 'No description available.'}</p>
//           <a href="${article.url}" target="_blank" rel="noopener" class="btn-download">Read more</a>
//           <hr />
//         `;
//         newsContainer.appendChild(articleElement);
//       });
//     } else {
//       // debugging
//       newsContainer.innerHTML = '<p>ERROR no articles found.</p>';
//     }
//   })
//   .catch(error => {
//     // debugging - throw if program logic doesnt work
//     console.error('ERROR cannot fetch:', error);
//   });