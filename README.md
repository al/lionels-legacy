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

#### Environment

Ensure that any essential environment variables are defined (consult [.env.development](.env.development)).

For sensitive environment variables or ones that should otherwise not be committed, use a `.local` file, e.g. `.env.development.local`.

When adding a dependency upon a new environment variable, be sure to update the [.env.development](.env.development) and [.env.production](.env.production) files in order to document it.

Any environment variable whose name is prefixed with `VITE_` will be exposed to the Vite processed code.

### Compile and Start a Development Server with Hot-Reloading

```sh
pnpm dev
```

### Compile, Minify and Prerender for Production

```sh
pnpm build
```

### Locally Preview Latest Production Build

```sh
pnpm preview
```

Be sure to run `pnpm build` first.

### Deploy (to [Github Pages](https://pages.github.com/))

Push to `main` branch to trigger a deployment to Github Pages via a [Github Action/workflow](.github/workflows/deploy.yml):

```sh
git push origin main
```

To deploy manually (not recommended):

```sh
pnpm deploy
```

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
- Commit message linting is provided by [commitlint](https://github.com/conventional-changelog/commitlint?tab=readme-ov-file). Messages should conform to the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification. See [.commitlintrc.yaml](.commitlintrc.yaml) for details.
- Git branch name linting is provided by [branch-name-lint](https://github.com/barzik/branch-name-lint) (actually we use [a fork](https://github.com/al/branch-name-lint/tree/integration/error-handling-issues) that we currently maintain). See [.branch-name-lint.json](.branch-name-lint.json) for details.
- [lint-staged](https://github.com/lint-staged/lint-staged) ensures that pre-commit checks (linting, formatting, and spell checking) are only run on staged files.

## Troubleshooting

### `pnpm build` hangs or Chromium segfaults during prerendering on OSX

Page prerendering is provided by [vite-plugin-prerender](https://github.com/Rudeus3Greyrat/vite-plugin-prerender), which itself relies upon [puppeteer](https://github.com/puppeteer/puppeteer/).

[puppeteer](https://github.com/puppeteer/puppeteer/) installs x86 versions of Chromium even when running on Apple Silicon/ARM64 chips.

If necessary run:

```sh
pnpm node node_modules/puppeteer/install.mjs
```

This should install a suitable version of Chromium, under ~/.cache/puppeteer/chrome/ by default. Verify that it works by launching it, e.g.

```sh
open '~/.cache/puppeteer/chrome/mac_arm-126.0.6478.182/chrome-mac-arm64/Google Chrome for Testing.app'
```

To instruct the build process to use this version of Chromium (or some other one that you have installed manually), set the `PUPPETEER_EXECUTABLE_PATH` variable path.

Use of an environment file is recommended. Remember that even when running locally, the build environment will most likely be set to `production`, so you should create/modify the .env.production.local file.
