# Folder structure
Project  contains 16 directories, 55 files.

> **Preview this website by checking the live link in my About section on GitHub -->**
[hectorbarquero.github.io/portfolio/](hectorbarquero.github.io/portfolio/)

> This project was built during my studies at Athabasca University, and was built to be compatible with mobile, web, and small monitors.

When you open the site, index.html is served up first with a welcome screen, which serves as a way to hydrate resources in advance. After load, you'll land on ../welcome/index.html. The loader only gets accessed on the initial site visit.


+ assets contains: project assets, including sass, css, icons, and images.

+ docs contains: license, and README. For supporting tools docs, check the site and go to the affiliated GH link.

+ home contains: main root of site. Contains .html files for about, tools, and welcome -- the main three navigation options of the site. 

        .
        ├── assets
        │   ├── icons
        │   │   ├── amd-icon.png
        │   │   ├── apple-touch-icon.png
        │   │   ├── bandai-icon.png
        │   │   ├── caf-icon.png
        │   │   ├── de-icon.jpg
        │   │   ├── factory-icon.png
        │   │   ├── framos-icon.png
        │   │   ├── gd-icon.png
        │   │   ├── github-icon.png
        │   │   ├── gnu-public-license-icon.png
        │   │   ├── intel-icon.jpg
        │   │   ├── linkedin-icon.png
        │   │   ├── nintendo-icon.png
        │   │   ├── nvidia-logo.png
        │   │   ├── raw-thrills-icon.png
        │   │   ├── reddit-icon.png
        │   │   └── tssa-icon.jpg
        │   ├── images
        │   │   ├── image-skull1-loader.svg
        │   │   ├── image-skull2-loader.svg
        │   │   ├── image-skull3-loader.svg
        │   │   ├── og-image.png
        │   │   ├── tool-dependencies-2.gif
        │   │   ├── tool-postproc-4.gif
        │   │   ├── tool-preproc-3.gif
        │   │   └── tool-problem-1.gif
        │   ├── js
        │   │   ├── app.js
        │   │   ├── github-api.js
        │   │   ├── loader.js
        │   │   ├── news-api.js
        │   │   ├── particles.js
        │   │   ├── popup.js
        │   │   ├── responsiveScript.js
        │   │   ├── testimonials.js
        │   │   └── validation.js
        │   └── sass
        │       ├── main.scss
        │       └── modules
        │           ├── common
        │           │   └── reset.scss
        │           ├── layouts
        │           │   ├── body.scss
        │           │   ├── email.scss
        │           │   ├── footer.scss
        │           │   ├── headings.scss
        │           │   ├── navbar.scss
        │           │   ├── para.scss
        │           │   ├── popup.scss
        │           │   └── table.scss
        │           └── pages
        │               ├── index.scss
        │               └── landing.scss
        ├── css
        │   ├── styles.css
        │   └── styles.css.map
        ├── docs
        │   ├── LICENSE.txt
        │   └── README.md
        ├── home
        │   ├── about
        │   │   └── index.html
        │   ├── tools
        │   │   └── index.html
        │   └── welcome
        │       └── index.html
        ├── index.html
        └── package.json