<h3 align="center">Netflix Clone-With SignUp/Login & Watching Youtube Trailer Features</h3>

<p align="center">This repository contains a Netflix clone built using React, ContextAPI,useReducer hook, Firebase authentication for signUp and login and also different profile creation. This project has Welcome Page, Sign Up Page.Login page, Profile page,Home page with banner and movie list.</p>

## 📝 Table of Contents

- [Usage](#usage)
- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🎈 Usage or Demo <a name="usage"></a>

Please watch the following demo video for usage of the website:

## 🧐 About <a name = "about"></a>

Netflix Clone is a web application built with React, ContextAPI, Firebase Database and Authentication. It provides users with an experience similar to that of the popular streaming service, Netflix.

The website consists of a Home page, Sign up page, Login page and Profiles section. The Home page allows users to browse through the available content on the site and view trailers for each movie or TV show. The Sign in page allows new users to create their own profile on the site. On the Login page, existing users can log in using their credentials. Finally, the Profiles section allows users to view and manage their personal settings such as name or avatar.

Netflix Clone is designed to provide an easy and enjoyable streaming experience for its users. With its intuitive user interface and wide range of features, it is sure to be a hit with viewers!

This project improved my understanding of the ContextAPI and Reducer hook, which is used for complex state management. I used styled components library for designing the CSS of website which I found useful while working with the dynamic states. Firebase authentication and access of database was challenging for me as I was working first time with database but I learnt some basic functionality of firebase. I used some third party some for youtube trailer feature which was exciting to work.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

Please follow the instructions below to run the application on your local machine.

1. Clone the repo :

```
git clone https://github.com/AbhayKadam57/Ecommerce-Shopping-Website.git
```

2. Install the project's packages with the following commands:

```
npm install
```

3. Create an account with Firebase, start a new project in the console, and read the Firebase Doc(https://firebase.google.com/docs/web/setup?hl=en&authuser=0). The required configuration will be provided by Firebase, which you can add in the file ``firebase.js` path--> src/firebase.js.

4. Create an `.env` file in root folder. and add all of the following firebase configuration ids and keys to the.env file with their respective keys and values.

```javascript
REACT_APP_FIREBASE_ID = "Your firebase id";

REACT_APP_FIREBASE_AUTH_DOMAIN = "Your firebase auth Domain";

REACT_APP_FIREBASE_PROJECT_ID = "Your firebae project id";

REACT_APP_STORAGE_BUCKET = "Your storage bucket";

REACT_APP_MESSAGE_ID = "Your messaging sender id";

REACT_APP_APP_ID = "Your app Id";
```

then modify your configuration `firebase.js` as follows:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
};
```

4. Create an TMDB account and consult Docs [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) for getting movie information. TMDB will provide you with a API key, which you can use in the filename `Request.js.` Add the razorpay Id to the '.env' file as follows:

```javascript
REACT_APP_API_KEY = "Your TMDB API key";
```

and replace the key in `Request.js`

```javascript
const requests = {
  trending: `${base_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
  Netflix_original: `${base_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  top_rated: `${base_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`,
  action_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  comedy_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  horror_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  romantic_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  Documentary: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};
```

5. For getting Access to the Youtube trailers we have to use [RapidAPI.com](https://rapidapi.com/hub) where yo can find [YouTube Data Free API](https://rapidapi.com/herosAPI/api/youtube-data8). add this api key `.env`

```javascript
REACT_APP_RAPID_API_KEY = "Your rapid api key";
```

Use this API in component where you have to call this API

```javascript
const options = {
  method: "GET",
  url: "https://youtube-data8.p.rapidapi.com/search/",
  params: { q: `${title}`, hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
  },
};
```

6. Don't forget to add `.env` in `.gitignore`

7. Finally, to run the project, use the following command:

```
    npm start
```

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJs](https://beta.reactjs.org/) - JavaScript Library
- [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) - API for Movie Data.
- [Firebase](https://console.firebase.google.com/) - User authentication and database
- [RapidAPI](https://rapidapi.com/herosAPI/api/youtube-data8) - Movie Trailer Details for Youtube Data from rapid API

## ✍️ Authors <a name = "authors"></a>

- [@AbhayKadam57](https://github.com/AbhayKadam57) - Idea & Initial work

<small>Note - All designs and Images copyright is belong to the Netflix. This is built only for Education purpose.<small>

<hr/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
