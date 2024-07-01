# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory this is essential command that you can run:

### `npm install`

Installing npm to new fresh server.

### `npm run build`

Add `./public/update-version.js` and `./public/version.json` for auto increment needed leave it with { "version": "0.0.1" }

To auto increment version based on build phase execute `npm run rebuild`

This affect to auto window.reload() on every main app.ts rendered when version are different from the before version.

`+++++++++++++++++++++++++++++++++++++++++++++++++ versioning ++++++++++++++++++++++++++++++++++++++++++++++++`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
