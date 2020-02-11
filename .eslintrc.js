module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2017,
    sourceType: "module",
    env: {
      es6: true
    }
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/forbid-prop-types": [
      0,
      {
        forbid: ["any"]
      }
    ],
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "react/no-array-index-key": 0,
    "react/jsx-props-no-spreading": 0,
    "no-unused-vars": ["warn"]
  }
};