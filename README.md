# Lottoland - Eurojackpot Winner Results Client
A SPA Client for consuming and showing Lottoland Eurojackpot Winner Results data.

## Tech Stack
- [React](https://reactjs.org/): to help creating the UI
- [Redux](https://redux.js.org/): for managing state
- [Typescript](https://www.typescriptlang.org/): to speed up the development experience
- [SCSS](https://sass-lang.com/documentation/syntax): to power up styling
- [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow): for Git branching model 
- [Jest](https://jestjs.io/): for unit testing
- [Cypress](https://redux.js.org/): for e2e testing

### Others
- [Yarn](https://classic.yarnpkg.com): faster was of handling package dependencies
- [Mocky](https://www.mocky.io/): for mocking HTTP responses
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): to create an explicit commit history
- [Husky](https://github.com/typicode/husky): for Git Hooks
- [Lint Staged](https://github.com/okonet/lint-staged): applying Git Hooks to staged files
- [Bitbucket Pipelines](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/addon/pipelines/home): for CI/CD
- [Create React App](https://facebook.github.io/create-react-app): for bootstrapping this project

## Authorization Issue
I've already spoken with Eva that Lottoland links/endpoints were not accessible for me. It throws a `NET::ERR_CERT_AUTHORITY_INVALID` error (also Spain seems to block links of online bets websites). 

For consuming on the web I've used a VPN but in the application doing a fetch, I was not able to consume the API. Did try bypassing this authorization and CORS with some browser extension but was in vain. In the end, I've used [Mocky](https://www.mocky.io/) to mock the same response of the API endpoint that was sent to me. 

You can change what endpoint this application will consume changing the value of `settings.ap.url` to `process.env.REACT_APP_RESULTS_URL` in `src/settings.ts` file.

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

#### `yarn`
> Alternatively: `npm install`
Install all dependencies.

#### `yarn start`
> Alternatively: `npm run start`
The application will be served on: `http://localhost:3000`

#### `yarn test`
> Alternatively: `npm test`
Run unit tests using Jest.

#### `yarn lint`
> Alternatively: `npm run lint`
Lint code using EsLint.

#### `yarn test:e2e`
> Alternatively: `npm run test:e2e`
Run e2e tests using Cypress in the terminal.

#### `yarn test:e2e:dev`
> Alternatively: `npm run test:e2e:dev`
Run e2e tests using Cypress  Electron App.

## Bitbucket CI/CD
I'm using Bitbucket and its pipelines. In `bitbucket-pipelines.yaml` will run linting, tests, and build tasks when pushing to a PR targeting `master branch`.

## Environment Variables
I'm using [cross-env](https://www.npmjs.com/package/cross-env) and the `.env` file. Usually, I don't commit this file, these variables should be set in a CD context change its values for the different environments, i.e: Staging, Production. Check comments on `.env` file for more details.
