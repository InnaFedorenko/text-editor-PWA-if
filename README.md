# Progressive Web Applications (PWA): Text Editor
## Table of Contents
- [Description](#description)
- [Installation]( #installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 
##  Description
- The Progressive Web Applications (PWA): Text Editor Tool was developed by [Inna Fedorenko](https://github.com/InnaFedorenko).
- [GiHub Link](https://github.com/InnaFedorenko/text-editor-PWA-if)
- [Link to App](https://text-editor-pwa-if-99c3c8ed972b.herokuapp.com )
- Date: 08-04-2023

### Your task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor, you will start with an existing application and implement methods for getting and storing data to an IndexedDB database. You will use a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

You will deploy this full-stack application to Heroku using the Heroku Deployment Guide on The Full-Stack Blog.

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
## Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```



##  Installation

0. Clone the repository with the project code.
1. Open Terminal in the root of your repository
2. Run `npm run install` install script to install all dependencies 
3. Run `npm run build` to build the project
4. Run `npm run dev` to debug 
5. Run `npm run start ` to start app
6. Deploy site to heroku

Node: Please make sure that you unregister all Service Workers and clear all site data id you was using Service Workers before.


##  Usage
1. Open (App)[https://text-editor-pwa-if-99c3c8ed972b.herokuapp.com/]
2. Install Using Install button if you would like to use desktop / mobile version

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)  
  This application is covered under the [MIT License](https://opensource.org/licenses/MIT).

##  Contributing
All contributors are welcome.
##  Tests
Test were not implemented to this project

##  Questions
If you have any questions, you can reach out to [me](https://github.com/InnaFedorenko) at 
[ivf.fedorenko@gmail.com](mailto:ivf.fedorenko@gmail.com).