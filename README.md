# Lionel's Legacy

## Developers

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

Git hooks are managed by [Husky](https://typicode.github.io/husky/).

Commit message linting is provided by [commitlint](https://github.com/conventional-changelog/commitlint?tab=readme-ov-file). Messages should conform to the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.
