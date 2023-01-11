module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: "standard",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    indent: ["off"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", {
      anonymous: "ignore",
      named: "ignore",
      asyncArrow: "ignore"
    }]
  }
};

