module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'mocha': true,
        'browser': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'rules': {
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': ['error', 'never'],
        'brace-style': 'error',
        'callback-return': 'error',
        'camelcase': ['error', {'properties': 'never'}],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'comma-dangle': ['error', 'never'],
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'func-names': ['error', 'never'],
        'generator-star-spacing': 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'indent': ['error', 4, {'SwitchCase': 1, 'MemberExpression': 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': ['error', {
            'afterBlockComment': false,
            'allowObjectEnd': false,
            'allowBlockEnd': false,
            'allowArrayEnd': false
        }],
        'max-depth': 'error',
        'max-nested-callbacks': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-compare-neg-zero': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': ['error', {'allowEmptyCatch': true}],
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-mixed-requires': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {'max': 2, 'maxEOF': 1}],
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-path-concat': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sync': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unsafe-negation': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-spacing': 'error',
        'object-shorthand': ['error', 'properties'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'before'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': ['error', {'array': false}],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'radix': ['error', 'as-needed'],
        'require-await': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'sort-imports': ['error', {'ignoreCase': true}],
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'strict': ['error', 'safe'],
        'template-curly-spacing': 'error',
        'template-tag-spacing': ['error', 'never'],
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'any'],
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': 'error'
    }
};
