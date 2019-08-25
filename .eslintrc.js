module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // js
    "no-console": 1,
    eqeqeq: 2,
    "no-var": 2,
    "prefer-const": 2,
    "prefer-template": 2,
    "prefer-spread": 2,
    "dot-notation": 2,
    "object-shorthand": 2,

    // Vue
    "vue/html-self-closing": [2, {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/order-in-components": 2,
    "vue/max-attributes-per-line": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-spacing": 0,
  }
}
