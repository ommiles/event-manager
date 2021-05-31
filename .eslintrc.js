// This will tell ESlint to use the Airbnb ruleset we have installed.
// It will also allow files with a js ending to contain JSX
// and switch off warnings for console and alert statements.
module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 0,
    'no-alert': 0,
  },
};
