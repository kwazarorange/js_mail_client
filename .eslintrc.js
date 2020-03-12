module.exports = {
  "extends": ["airbnb",
              "plugin:prettier/recommended",
              "prettier/react"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "prefer-template": "off",
  }
};
