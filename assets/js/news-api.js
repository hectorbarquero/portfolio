// this program abstracts the api key with a serverless function. My serverless function is included in my docs
// the program will pull tech posts from news API org, but my api key is stored in an environment variable on my server.

// fetch results, hide key NEWS_API_KEY
fetch('https://whimsical-empanada-362b3f.netlify.app/.netlify/functions/news-api')
  .then(response => {
    if (!response.ok) {
        //debugging - network err if fail
      throw new Error('ERROR: Network response timeout');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.articles);
  })
  .catch(error => {
    //debugging
    console.error('ERROR cannot fetch:', error);
  });
