const { CLIEngine } = require('eslint');

const cli = new CLIEngine({});

const eslint = (files) =>
  'eslint --fix --max-warnings=0 ' +
  files.filter((file) => !cli.isPathIgnored(file)).join(' ');
const stylelint = (files) => `stylelint --fix --mw 0 ${files.join(' ')}`;
const prettier = (files) => `prettier --write ${files.join(' ')}`;

function rules(...args) {
  return (files) => args.map((f) => f(files));
}

module.exports = {
  '*.vue': rules(eslint, stylelint, prettier),
  '*.js': rules(eslint, prettier),
  '*.scss': rules(stylelint, prettier),
  '*.{html,yml,json,md}': rules(prettier),
};
