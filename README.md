# Overview

Game Time: Behavior-hacking Node/React app. Do stuff irl, acquire game time.

# Get Started

1. **Initial Machine Setup.** First time running Game Time? Then complete [Initial Machine Setup](#initial-machine-setup).
2. **Clone the project.** `git clone [project url here]`.
3. **Run the Setup Script.** `yarn setup`.

# Deploy

Build Production files and launch node server: `yarn serve`

# Commands for development

* `yarn start` - launch client dev server with linting and testing in watch mode for client development
* `yarn open:server` - launch node server in watch mode for api development
* `yarn build` - run a fresh build of the dist folder, clearing all dist files, and testing and linting beforehand
* `yarn serve` - generate build and launch node server

### Other

* `yarn setup` - install deps and run additional setup
* `yarn test` - run tests
* `yarn lint` - lint client files
* `yarn open:cover` - generate test coverage report and open in browser
* `yarn analyze-bundle` - analyze client production bundle

# Initial Machine Setup

1. [Install git](https://git-scm.com/downloads).
2. [Install node](https://nodejs.org/en/download/).
3. [Install yarn](https://yarnpkg.com/lang/en/docs/install/).
4. [Install PostgreSQL](https://www.postgresql.org/).

# Application Requirements

### Build Requirements

* [yarn](https://yarnpkg.com/en/) 1.3.2+

### Runtime Requirements

* [Node.js](https://nodejs.org/en/) 8.9.1+
* [PostgreSQL](https://www.postgresql.org/) 9.6+