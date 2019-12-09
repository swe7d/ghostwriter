# Ghost Writer Project swe7d

## Installation
1. In the project, run `npm install`
2. cd into `client` and run `npm install` followed by `npm run-script build`

## Development Environment
While developing, we want to take advantage of React's hot reloading. To do this we will start a react server and an express server. 

1. In the root of the project, run `npm start` to start the express server
2. cd into `client` and run `npm start` to start the react server. It will be available on `http://localhost:9000`
3. To see the react development server, open `http://localhost:3000` in your browser.

## Production Environment
### Deploying new code
This project uses a CI/CD pipeline on Heroku. To deploy to production, simply make a commit/pull request to the master branch. Heroku will automatically clone and deploy to the production instance. 

### Dependencies
A separate MongoDB instance is available through Heroku for the production app. Its URI is available through environment variables. 

### Environment Variables
The production environment requires three environment variables to be set on Heroku. It needs the Firebase Admin credential, the mongodb URI, and the project name, so that it knows which backend to connect to. These environment variables are where one would update database and server connections

### Production Deployment
The production deployment can be found at https://ghostwriter-prod.herokuapp.com until the client has decided on a final domain name. 

## Dependencies
### Material UI
This project uses Materal UI for the front end components and styling. 

### Firebase Auth
Firebase is only used for authentication and creating tokens that allow access to the backend. Each backend endpoint is secured with a Firebase Auth token. 

### jsPDF
jsPDF is a library that generates PDFs in javascript on the client-side. The library is used to create, format, and download the user's pdf of their book.

## Features Implemented
* User can login
* User can register
* User can create a new book
* Any edits a user makes to a book are automatically synchronized and saved on the server
* User can add milestones to their book
* User can add information to the book about who it is a biography for
* All backend endpoints require authentication
* Users can only make modifications to their own book, even if given a link to a another user's wizard 
* User can reorder how milestones appear in the final downloaded document
* User can download a PDF version of their book
* User can search for milestones to add to their book 
