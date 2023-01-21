module.exports = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  printWidth: 100,
  pluginSearchDirs: ['.'],
  plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
