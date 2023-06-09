// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc.cjs')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    solid: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:solid/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: './'
  },
  plugins: ['prettier', 'solid', '@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': ['error', prettierConfig]

    /*                                                     */
    /* UNCOMMENT THESE RULES IF YOU WANNA GO HARDCORE MODE */
    /*                                                     */

    //   // typescript-eslint rules
    //   "@typescript-eslint/no-var-requires": "off",
    //   "@typescript-eslint/no-unused-vars": ["error"],
    //   "@typescript-eslint/array-type": [
    //     "error",
    //     { "default": "array-simple", "readonly": "array-simple" }
    //   ],
    //   "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    //   "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    //   "@typescript-eslint/consistent-type-imports": "error",
    //   "@typescript-eslint/prefer-as-const": "error",
    //   "@typescript-eslint/unified-signatures": "error",
    //   "@typescript-eslint/sort-type-union-intersection-members": "error",
    //   "@typescript-eslint/prefer-optional-chain": "error",
    //   "@typescript-eslint/prefer-nullish-coalescing": "error",
    //   "@typescript-eslint/prefer-includes": "error",
    //   "@typescript-eslint/prefer-string-starts-ends-with": "error",
    //   "@typescript-eslint/require-array-sort-compare": "error",
    //   "@typescript-eslint/restrict-plus-operands": "warn",
    //   "@typescript-eslint/no-explicit-any": "warn",
    //   "@typescript-eslint/no-unnecessary-type-constraint": "error",
    //   "@typescript-eslint/no-dynamic-delete": "warn",
    //   "@typescript-eslint/explicit-function-return-type": "off",
    //   "@typescript-eslint/no-for-in-array": "error",
    //   "@typescript-eslint/switch-exhaustiveness-check": "error",
    //   "@typescript-eslint/await-thenable": "error",
    //   "@typescript-eslint/prefer-reduce-type-parameter": "error",

    //   // import plugin rules
    //   "import/group-exports": "error",

    //   // eslint rules
    //   "arrow-body-style": ["error", "as-needed"],
    //   "curly": ["error", "all"],
    //   "default-case": "error",
    //   "default-case-last": "error",
    //   "default-param-last": "error",
    //   "dot-notation": "error",
    //   "eqeqeq": "error",
    //   "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    //   "max-params": ["error", 4],
    //   "no-alert": "error",
    //   "max-depth": ["error", 3],
    //   "no-array-constructor": "error",
    //   "no-bitwise": "error",
    //   "no-console": "error",
    //   "no-delete-var": "error",
    //   "no-empty": "error",
    //   "no-eq-null": "error",
    //   "no-eval": "error",
    //   "no-extra-bind": "error",
    //   "no-extend-native": "error",
    //   "no-extra-boolean-cast": "error",
    //   "no-extra-label": "error",
    //   "no-floating-decimal": "error",
    //   "no-global-assign": "error",
    //   "no-implicit-coercion": "error",
    //   "no-implied-eval": "error",
    //   "no-invalid-this": "error",
    //   "no-labels": "error",
    //   "no-lone-blocks": "error",
    //   "no-lonely-if": "error",
    //   "no-loop-func": "error",
    //   "no-multi-assign": "error",
    //   "no-multi-str": "error",
    //   "no-new": "error",
    //   "no-new-func": "error",
    //   "no-new-object": "error",
    //   "no-new-wrappers": "error",
    //   "no-nonoctal-decimal-escape": "error",
    //   "no-octal": "error",
    //   "no-octal-escape": "error",
    //   "no-plusplus": "error",
    //   "no-proto": "error",
    //   "no-return-assign": "error",
    //   "no-return-await": "error",
    //   "no-script-url": "error",
    //   "no-sequences": "error",
    //   "no-throw-literal": "error",
    //   "no-undef-init": "error",
    //   "no-unneeded-ternary": "error",
    //   "no-useless-computed-key": "error",
    //   "no-useless-catch": "error",
    //   "no-useless-concat": "error",
    //   "no-useless-rename": "error",
    //   "no-with": "error",
    //   "object-shorthand": "error",
    //   "operator-assignment": ["error", "never"],
    //   "prefer-arrow-callback": "error",
    //   "prefer-const": "error",
    //   "prefer-destructuring": "error",
    //   "prefer-exponentiation-operator": "error",
    //   "prefer-numeric-literals": "error",
    //   "prefer-object-spread": "error",
    //   "prefer-promise-reject-errors": "error",
    //   "prefer-regex-literals": "error",
    //   "prefer-rest-params": "error",
    //   "prefer-spread": "error",
    //   "strict": ["error", "global"],
    //   "symbol-description": "error",
    //   "yoda": "error",
    //   "consistent-return": "warn",
    //   "func-names": ["error", "always"],
    //   "no-magic-numbers": "warn",
    //   "no-mixed-operators": "warn",
    //   "no-negated-condition": "warn",
    //   "no-param-reassign": "error",
    //   "no-shadow-restricted-names": "error"
  }
}
