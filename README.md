# T. Monitor

[![CircleCI](https://circleci.com/gh/iuricmp/truck-monitor.svg?style=svg)](https://circleci.com/gh/iuricmp/truck-monitor)

<!-- TOC -->
- [Initial Setup](#initial-setup)
- [Developing](#developing)
  - [`yarn start`](#yarn-start)
  - [`yarn test`](#yarn-test)
  - [`yarn storybook`](#yarn-storybook)
  - [Docker](#docker)
    - [`dev`](#dev)
    - [`storybook`](#storybook)
    - [`production`](#production)
    - [`tests`](#tests)
- [Build](#build)
- [CI](#ci)
- [Configuration](#configuration)

<!-- /TOC -->

## Initial Setup

This project uses [Here Places API](https://developer.here.com/documentation/places/topics/quick-start-find-text-string.html) and you need to generate the `app_id` and `app_code`. Please, go to [this url](https://developer.here.com/documentation/places/topics/quick-start-find-text-string.html?create=Freemium-Basic&keepState=true&step=account) to create these keys.

**Do not forget to update these files with your generated keys:**

- [.env.production](./.env.production)
- [.env.development](./.env.development)

## Developing

You should install the following extensions to have liting and formatting working within Visual Studio Code:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn storybook`

Launches the [Storybook](https://storybook.js.org/) application. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Docker

The following services are available via Docker Compose:

#### `dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Command: `docker-compose up dev`

#### `storybook`

Runs the [Storybook](https://storybook.js.org/). Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

Command: `docker-compose up storybook`

#### `production`

Runs the app with a production build. Open [http://localhost:5000](http://localhost:3000) to view it in the browser.

Command: `docker-compose up production`

#### `tests`

Launches the test runner in CI mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Command: `docker-compose run tests`

## Build

`yarn build` Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## CI

[CircleCI](https://circleci.com/gh/iuricmp/truck-monitor/tree/master) will automatically pick the following files and run them when needed.

## Configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more about it and how to configure in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
