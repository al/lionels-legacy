import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginJson from 'eslint-plugin-json'
import eslintPluginMarkdown from 'eslint-plugin-markdown'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginYaml from 'eslint-plugin-yml'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Helper function to process ignore files
 *
 * There seems to be a problem with using `includeIgnoreFile` from @eslint/compat directly in flat
 * config files. The presence of additional properties (specifically `name`) in the response appears
 * to prevent the `ignores` from working. This logic simply strips out all properties other than
 * `ignores`, which seems to work.
 *
 * It also handles the conversion of the supplied argument to an absolute path.
 */
const includeIgnoreFileHelper = (file) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const { ignores } = includeIgnoreFile(path.resolve(__dirname, file))

  return { ignores }
}

export default [
  includeIgnoreFileHelper('.gitignore'),
  includeIgnoreFileHelper('.gitignore.local'),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  eslintPluginJson.configs['recommended'],
  ...eslintPluginYaml.configs['flat/recommended'],
  {
    files: ['**/*.md'],
    plugins: {
      markdown: eslintPluginMarkdown,
    },
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*.js'],
    rules: {
      'import/no-unresolved': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'padded-blocks': 'off',
    },
  },
]
