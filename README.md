# Lionel's Legacy

## Developers

Register the shared Git configuration file ([.gitconfig](.gitconfig)):

```bash
git config --local include.path ../.gitconfig
```

Install [PNPM](https://pnpm.io/installation):

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Install Node dependencies, including the requisite version of Node if necessary (defined in [.npmrc](.npmrc)):

```bash
pnpm install
```
