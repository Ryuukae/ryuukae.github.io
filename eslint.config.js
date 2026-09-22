import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  jsdoc.configs['flat/recommended'],
  {
    plugins: {
      jsdoc,
    },
    rules: {
      // 1. Where JSDoc is required
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            ClassDeclaration: true,
            MethodDefinition: true,
            FunctionDeclaration: true,
            ArrowFunctionExpression: false,
          },
        },
      ],
      // 2. Mandatory Descriptions
      'jsdoc/require-description': 'error',
      // 3. Parameters and Object Properties
      'jsdoc/require-param': 'error',
      'jsdoc/require-param-description': 'error',
      'jsdoc/require-param-type': 'error',
      'jsdoc/check-param-names': [
        'error',
        {
          checkDestructured: true, // Enables the inline `config.propertyName` standard
        },
      ],

      // 4. Returns
      'jsdoc/require-returns': [
        'error',
        {
          checkConstructors: false,
          checkGetters: false,
          forceRequireReturn: false, // Don't require @returns for void functions
        },
      ],
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-returns-type': 'error',

      // 5. Throws and Errors
      'jsdoc/require-throws': 'error',
      'jsdoc/require-throws-description': 'error',
      'jsdoc/require-throws-type': 'error',

      // 6. Access Modifiers
      'jsdoc/check-access': 'error',

      // 7. General Validity
      'jsdoc/check-tag-names': 'error',
      'jsdoc/valid-types': 'error',
      'jsdoc/empty-tags': 'error',
      'jsdoc/no-bad-blocks': 'error',
      'jsdoc/no-defaults': 'error',

      // 8. THE FIREWALL: Allowlist ONLY the specific stated tags (excluding @name)
      'jsdoc/no-restricted-syntax': [
        'error',
        {
          contexts: [
            {
              comment:
                'JsdocTag[tag=/^(?!(param|arg|argument|returns|return|throws|exception|author|version)$).+$/]',
              context: 'any',
              message:
                'Strict Mode: You are only allowed to use @param, @returns, @throws, @author, and @version. Extraneous tags are prohibited.',
            },
          ],
        },
      ],

      // 9. Tag Ordering and Spacing
      'jsdoc/tag-lines': ['error', 'never', { startLines: 0, endLines: 0 }],
      'jsdoc/sort-tags': [
        'error',
        {
          // Controls the required blank lines between different tag groups
          linesBetween: 1,
          // Enforces the strict vertical ordering of tag groups
          tagSequence: [
            {
              tags: [
                'param',
                'arg',
                'argument',
                'returns',
                'return',
                'throws',
                'exception',
                'author',
                'version',
              ],
            },
            { tags: [] },
            { tags: ['-other'] },
          ],

          // Automatically sorts any tags not explicitly listed in tagSequence alphabetically
          alphabetizeExtras: true,

          // Allows specific tags to bypass strict ordering rules without causing an error
          tagExceptions: {},

          // Flags errors if spacing between different tag groups violates 'linesBetween'
          reportTagGroupSpacing: true,

          // Flags errors if there are incorrect blank lines inside a single tag group
          reportIntraTagGroupSpacing: true,
        },
      ],
    },
  },
  {
    files: ['tests/**/*.js', 'scripts/**/*.js', '*.config.js', '.*rc.js', 'scratch/**/*.js'],
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-description': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-description': 'off',
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      'vite.config.js',
      'eslint.config.js',
      '.history/',
      'coverage/',
    ],
  },
];
