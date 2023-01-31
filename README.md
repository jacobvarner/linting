# Linting

## Background

In my experience jumping moving teams fairly frequently, and often being with less experienced devs, it has been evident from the start that some form of linting is beneficial to the codebase. In general, linting can be seen as a disruptive/blocking feature, but I've tried to remove as much of the blockers and confusion to make sure the linting I implement is easy to undestand and is a benefit instead of a blocker.

With that being said, the configuration(s) shown here are meant to be a suggestion and each option can easily be turned off, removed, or added to. In general, especially with ESLint, I turn on the "error" flag for things that will actually cause errors and save "warnings" for everything else. This typically means stylistic things or opinionated rules will never block development progress. I also then try to stick to mostly rules that are automatically fixable with `--fix` or have an expectation that they'll need a team discussion and norming.

When I move to a new team, or join a team that I think can benefit from linting, I usually start with this overly explained configuration and then explicitly ask for the teams input on what rules need to be tweaked.

## Overview
 - [Commit Linting](#commit-linting) - these rules allow for linting of commit messages (usually just on `main`), which enforces a set of norms and makes things like generating CHANGELOGs easier.
 - [Auto Changelog](#auto-changelog-and-release) - automates tags for releases as well as auto updates the often required changelog that can be sent to users, security teams, both, or others.
 - Frontend
  - [Formatting](#frontend-formatting) - Prettier for an initial format of code that mostly enforces consistency and I've found it to be more performant when used before linting.
  - [Linting](#frontend-linting-with-eslint) - ESLint for frontend linting (mostly TypeScript) with plugins for other frameworks/tools I have commonly used
    - Base - rules supported out of the box by ESLint
    - React - specific rules for React and JSX
    - Jest - specific rules for Jest
    - React Testing Library - specific rules for React Testing Library patterns
    - Imports - specific rules for organizing and cleaning up imports
- [Backend Formatting](#backend-formatting) - using .editorconfig to sync Java formatting rules across the repository

## Going Forward

In the future, I'd like to:
- Add actual linting for the backend (potentially Checkstyle for Java)
- Automate the Java formatting step

### Commit Linting

Commit linting is achieved using the [commitlint](https://commitlint.js.org/#/) package and an example configuration is given in `.commitlintrc.js`. This configuration is setup to work with Tracker story IDs and allows for features, fixes (bugs), and chores. The expected final format is `[#123456789] feature: Adds new feature and linting.` and the configuration is set to give helpful error messages when someone messes up the format on the `main` branch of a repo (when using the `commit-msg` hook configuration in this repo).

This config is helpful for maintaining a consistent style for commit messages to main, but is especially useful when attempting to auto generate the change log or other release material like I do in the next section.

### Auto Changelog and Release

Given a requirement to provide a detailed change log to a security team with every release, automating the change log was one of the most useful improvements to our processes. THe configuration in `.auto-changelog` (which can also be added as a section in `package.json`) allows for a `CHANGELOG.md` file to be generated each time the `yarn auto-changelog` command is run. By default, this pulls each commit, then adds them to the document using the template provided in `auto.changelog.template.hbs`. You can also specify a starting version, which can be helpful if you have commits that you don't want to include, want to drop off after a certain point, or want to skip because they follow a different format.

The configuration and template provided here automatically adds a link to Tracker with the story as well as the commit hash that links to the commit page. Commits are separated by features, fixes, and chores for each release and this configuration is set to filter out any commits with the ID `[#000000000]`.

This process is made even simpler by using the `yarn release <version number>` command in `package.json`. This command automatically syncs and prunes tags with the remote, adds a tag so the change log can be generated, then adds the change in a commit, and re-tags that commit.

### Frontend Formatting

This is the simplest and one of the more common improvements and automates formatting to inforce a consistent style in the code base. I have found that running the code through Prettier first is more performant and catches things better than ESLint's formatting rules that sound similar.

I used to be in favor of just using ESLint because on the surface, it appeared to offer the same functionality but with just one tool, but was convinced to switch after reading [Prettier's own documentation](https://prettier.io/docs/en/comparison.html) on how to use the two together and have since seen better results when using both in succession.

### Frontend Linting with ESLint

This is where the bulk of the linting is done. The file also has the most comments to make it clear what rules do what as well as specify what plugins are being used and where to get more info. I started adding comments to the rules to that other teammates can get a better answer for why a certain rule might be failing. It's also helpful when quickly going through my initial config and turning rules off or on based on the project/team.

As mentioned in the intro, I try to only use the "error" level for rules that actually catch potential errors in the code. Everything else is only set to "warning" if turned on as to limit the amount that the linter blocks work. There is also a large emphasis on rules that can be automatically fixed in most cases. Each of these is separated into different sections in the `.eslintrc.js` file.

In this file, there are several rules that are supported by [ESLint](https://eslint.org/docs/latest/rules/) out of the box as well as a few useful plugins:
- [React](https://github.com/jsx-eslint/eslint-plugin-react) and [React Hook](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [Imports](https://github.com/import-js/eslint-plugin-import) (which has proven to be the most finicky, so some rules are turned off here)
- [Jest](https://github.com/jest-community/eslint-plugin-jest), [Jest DOM](https://github.com/testing-library/eslint-plugin-jest-dom), and [React Testing Library](https://github.com/testing-library/eslint-plugin-testing-library) which are only applied to test files

There are also many more plugins that I plan to look into in [this expansive list](https://github.com/dustinspecker/awesome-eslint).

> Both the formatting and linting of the code are (in my opinion) best done before each commit using [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) with configurations similar to the ones included in the repo. This allows for each developer to use or not use any formatting while working and then just format and lint it all once before pushing to the repository. With this many ESLint rules, it also gets a little slow to run on save when used with IntelliJ (although that's supported if you'd like).

### Backend Formatting

One of the things that started my interest in really diving in to linting and formatting was the search for a way to sync Java formatting across a codebase. This is now most easily supported by using a standard `.editorconfig` file in most IDEs and code editors. With IntelliJ, `.editorconfig` is supported automatically and can also be used to set your formatting rules visually before exporting the file to be checked into the codebase.

I use `.editorconfig` mostly for Java but could be used for other files if desired (although I'd still leave the frontend to Prettier and ESLint).

For now, this can only be run on save, or for the entire codebase by manually running the command in IntelliJ. There is a way to run it from the command line now, but it requires no other instances of IntelliJ to be running on your computer. I'd like to find a way to get this working in the future so it can be run in the pre-commit hook just like the other formatting and linting.