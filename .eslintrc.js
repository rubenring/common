var path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.join(__dirname, "_infrastruktur/webpack.config.js")
      }
    },
    "import/parser": "babel-eslint",
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "2018",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "every": [ "nesting", "id" ]
      },
      "allowChildren": true,
    }],
    "react-hooks/rules-of-hooks": "error",
    "no-eval": ["error"],
    "no-use-before-define": ["error"],
    "curly": "error",
    "indent": ["error", 4],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "no-var": "error",
    "no-duplicate-imports": "error",
    "arrow-spacing": "error",
    "no-useless-constructor": "warn",
    "no-console":2
  }
}