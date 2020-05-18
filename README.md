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
- [Yarn](https://classic.yarnpkg.com): faster was of handling package dependencies
- [Mocky](https://www.mocky.io/): for mocking HTTP responses
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): to create an explicit commit history
- [Husky](https://github.com/typicode/husky): for Git Hooks
- [Lint Staged](https://github.com/okonet/lint-staged): applying Git Hooks to staged files
- [Bitbucket Pipelines](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/addon/pipelines/home): for CI/CD
- [Create React App](https://facebook.github.io/create-react-app): for bootstrapping this project

## Authorization Issue
I've already spoken with Eva that Lottoland links/endpoints were not accessible for me. It throws a `net::ERR_CERT_AUTHORITY_INVALID` error, also Spain seems to block links of online bets websites:

![net::ERR_CERT_AUTHORITY_INVALID](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/raw/c32e6c71911b107848a89e4dfb904fb8c6882027/docs/cert-auth-error.jpg) ![Spain's regulation](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/raw/c32e6c71911b107848a89e4dfb904fb8c6882027/docs/spain-regulation.png)

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
I'm using feature branches for my features/refactors/etc. Also, Squashing the commits when merging a PR to master, this way the master branch is cleaner and shows only meaningful commits. Not using Development branch but Master directly.

![Master Branch Commits](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/raw/c32e6c71911b107848a89e4dfb904fb8c6882027/docs/gitflow.jpg)

PRs have some rules (build passing for example) to be able to be merged to master:

![Master Branch Policies Rules](https://bitbucket.org/gabrihelllima/eurojackpot-winner-results/raw/c32e6c71911b107848a89e4dfb904fb8c6882027/docs/master-policies.jpg)

## Bitbucket CI
I'm using Bitbucket and its pipelines. In `bitbucket-pipelines.yaml` will run linting, tests, and build tasks when pushing to a PR targeting `master branch`.

## Environment Variables
I'm using [cross-env](https://www.npmjs.com/package/cross-env) and the `.env` file. Usually, I don't commit this file, these variables should be set in a CD context change its values for the different environments, i.e: Staging, Production. Check comments on `.env` file for more details.
