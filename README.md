# Lionel's Legacy

## Developers

### Setup

Register the shared Git configuration file ([.gitconfig](.gitconfig)):

```sh
git config --local include.path ../.gitconfig
```

Install [PNPM](https://pnpm.io/installation):

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Install Node dependencies, including the requisite version of Node if necessary (defined in [.npmrc](.npmrc)):

```sh
pnpm install
```

### Compile and Start a Development Server with Hot-Reloading

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Locally Preview Latest Production Build

```sh
pnpm preview
```

Be sure to run `pnpm build` first.

### Lint with [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/)

```sh
pnpm lint
```

Or fix lints:

```sh
pnpm lint:fix
```

For more targetted linting, the following are also available:

```sh
pnpm lint:js
pnpm lint:js:fix
pnpm lint:css
pnpm lint:css:fix
```

### Format with [Prettier](https://prettier.io/)

```sh
pnpm format
```

Or fix formatting issues:

```sh
pnpm format:fix
```

### Spellcheck with [CSpell](https://cspell.org/)

```sh
pnpm spelling
```

Or launch an [interactive script](sbin/cspell-i) to add unrecognised words to the list of `ignoreWords` in [cspell.config.yaml](cspell.config.yaml):

```sh
pnpm spelling:fix
```

### Other Notable Tools

- Git hooks are managed by [Husky](https://typicode.github.io/husky/).
- Commit message linting is provided by [commitlint](https://github.com/conventional-changelog/commitlint?tab=readme-ov-file). Messages should conform to the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- [lint-staged](https://github.com/lint-staged/lint-staged) ensures that pre-commit checks (linting, formatting, and spell checking) are only run on staged files.
