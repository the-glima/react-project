# React Project
A SPA Client for consuming and endpoint and showing some data.

## Tech Stack
- [React](https://reactjs.org/): to help creating the UI
- [Redux](https://redux.js.org/): for managing state
- [Typescript](https://www.typescriptlang.org/): to speed up the development experience
- [SCSS](https://sass-lang.com/documentation/syntax): to power up styling
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow): for Git branching model 
- [Jest](https://jestjs.io/): for unit testing
- [Cypress](https://redux.js.org/): for e2e testing
- [Yarn](https://classic.yarnpkg.com): faster was of handling package dependencies
- [Mocky](https://www.mocky.io/): for mocking HTTP responses
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): to create an explicit commit history
- [Husky](https://github.com/typicode/husky): for Git Hooks
- [Lint Staged](https://github.com/okonet/lint-staged): applying Git Hooks to staged files
- [Github Actions](https://github.com/features/actions): for CI/CD
- [Create React App](https://facebook.github.io/create-react-app): for bootstrapping this project

## How to run
- Using Docker
- Using Yarn or NPM

### Using Docker
if you have Docker installed just run:

```
$ docker-compose up --build
```
The build version of the application will be served on: `http://localhost:8080`

### Using Yarn or NPM
For faster development workflow use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

#### Install dependencies:
```
$ yarn
```
> Alternatively run: `npm install`

#### Run the application, it'll be served on: `http://localhost:3000`
```sh
$ yarn start
```
> Alternatively run: `npm run start`

#### Run unit tests:
```sh
$ yarn test
```
> Alternatively run: `npm test`

#### Lint code using:
```sh
$ yarn lint
```
> Alternatively run: `npm run lint`

#### Run e2e tests using the terminal:
```sh
$ yarn test:e2e
```
> Alternatively run: `npm run test:e2e`

#### Run e2e tests using Electron App:
```sh
$ yarn test:e2e:dev
```
> Alternatively run: `npm run test:e2e:dev`

## GitFlow
I'm using feature branches for my features/refactors/etc. Also, Squashing the commits when merging a PR to main, this way the main branch is cleaner and shows only meaningful commits. Not using Development branch but main directly.

## GitHub Actions
I'm using GitHub Actions to will run linting, tests, and build tasks when pushing to a PR targeting `main branch`.

## Environment Variables
I'm using [cross-env](https://www.npmjs.com/package/cross-env) and the `.env` file. Usually, I don't commit this file, these variables should be set in a CD context change its values for the different environments, i.e: Staging, Production. Check comments on `.env` file for more details.
