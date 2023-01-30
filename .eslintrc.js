module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["plugin:react/jsx-runtime", "prettier"],
  // Needed if working with TypeScript
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "detect"
    },
    "jest": {
      "version": "detect"
    }
  },
  // Plugins must be installed separately via NPM
  // For even more helpful plugin options, check out: https://github.com/dustinspecker/awesome-eslint
  "plugins": ["@typescript-eslint", "jest", "react", "react-hooks", "import"],
  "rules": {
    /* More information on rules can be found at esling.org/docs/rules */

    /* Rules that prevent errors or possible errors (not fixable with --fix) */
    "array-callback-return": ["error", { "checkForEach": true }], // Enforce return statements in callbacks of array methods and prevent returning values in forEach callbacks
    "constructor-super": "error", // Require "super()" calls in constructors
    "for-direction": "error", // Enforce "for" loop update clause moving the counter in the right direction
    "getter-return": "error", // Require return statement in get (allows return; to default as undefined)
    "no-async-promise-executor": "error", // Disallows async functions in Promise executors
    "no-await-in-loop": "error", // Prevents await in loops where Promise.all should be used instead
    "no-class-assign": "error", // Disallow reassigning class members
    "no-compare-neg-zero": "error", // Disallow compare to -0 to prevent unexpected behavior/misunderstandings
    "no-cond-assign": "error", // Prevent accidental = assignments in conditional statements
    "no-const-assign": "error", // Disallow reassigning "const" variables
    "no-constant-binary-expression": "error", // Disallow expressions where the operation doesn affect the value
    "no-constant-condition": "error", // Disallow constants/literals in conditional statements
    "no-constructor-return": "error", // Disallow returning value from constructor
    "no-control-regex": "error", // Disallow invisible characters in regex patterns
    "no-debugger": "error", // No debugger statements
    "no-dupe-args": "error", // Disallow duplicate argument names in functions
    "no-dupe-else-if": "error", // Disallow duplicate if-else conditions
    "no-dupe-keys": "error", // Disallow duplicate object keys
    "no-duplicate-case": "error", // Disallow duplicate case conditions
    "no-duplicate-imports": "error", // Consolidate imports by module
    "no-empty": "warn", // Disallow empty code blocks (can contain just a comment for stubs)
    "no-empty-character-class": "error", // Disallow empty character classes in RegEx (likely just a typing error)
    "no-empty-pattern": "error", // Disallow empty destructuring patterns
    "no-ex-assign": "error", // Disallow re-assigning exceptions in catch statements
    "no-fallthrough": "error", // Disallow fallthrough of "case" statements
    "no-func-assign": "error", // Disallow re-assigning function declarations
    "no-import-assign": "error", // Disallow re-assigning import bindings
    "no-inner-declarations": "error", // Disallow function declarations in nested blocks (named and anonymous functions are fine)
    "no-invalid-regexp": "error", // Disallow invalid regular expressions strings in "RegExp" constructors
    "no-irregular-whitespace": "error", // Disallow irregular whitespace charactes (except in strings)
    "no-loss-of-precision": "error", // Disallow number literals that have more precision than JS Number
    "no-misleading-character-class": "error", // Disallow characters that combined codes in RegEx character class syntax
    "no-new-native-nonconstructor": "error", // Disallow "new" operators with global non-constructor functions
    "no-new-symbol": "error", // Disallow "new" operators with the "Symbol" object
    "no-obj-calls": "error", // Disallow calling global objects (ex. Math, JSON, etc.) as functions
    "no-promise-executor-return": "error", // Disallow return values in executor function (should just call resolve or reject)
    "no-prototype-builtins": "error", // Disallow use of Object.protoype on builtins directly
    "no-self-assign": "error", // Prevent assignments where both sides are the exact same
    "no-self-compare": "error", // Disallow comparisions where both sides are the exact same
    "no-setter-return": "error", // Disallow return statements in setters
    "no-sparse-arrays": "error", // Disallows sparse arrays (ex. [,,,]) should use Array(10) for "empty" arrays
    "no-template-curly-in-string": "error", // Disallow template literal placeholder syntax in regular strings
    "no-this-before-super": "error", // Disallow "this"/"super" before calling "super()" in constructors
    "no-undef": "error", // Disallow the use of undeclared variables unless mentioned in "/* global */" comments
    "no-unexpected-multiline": "error", // Disallow multiline statements that could be interpreted as a single statement
    "no-unmodified-loop-condition": "error", // Disallow unmodified loop conditions
    "no-unreachable": "error", // Disallow unreachable code after return, throw, break, and continue.
    "no-unreachable-loop": "error", // Disallow loops that can never reach second iteration
    "no-unsafe-finally": "error", // Disallow control flow statements in finally block
    "no-unsafe-negation": "error", // Disallow negating left argument for in and instance of statements
    "no-unsafe-optional-chaining": "error", // Disallow use of optional chaining in contexts where the "undefined" value is not allowed
    "no-unused-private-class-members": "error", // Disallow unused private class members
    "no-unused-vars": "off", // Prevent declaring variables that go unused (use TypeScript version instead)
    "@typescript-eslint/no-unused-vars": "error", // Prevent declaring unused variables
    "no-use-before-define": "error", // Disallow the use of variables before the are defined
    "no-useless-backreference": "error", // Disallow backreferences in JavsScript regex patterns
    "require-atomic-updates": "error", // Disallow async code that still can cause race conditions
    "use-isnan": "error", // Disallow comparing to NaN and require .isNaN() instead
    "valid-typeof": "error", // Require one of the expected string literals when using typeof comparisons

    /* Automatically fixed with --fix */
    "arrow-body-style": ["warn", "as-needed"], // Require braces around arrow function bodies
    "capitalized-comments": ["warn", "always"], // Require comments to start with capital letter
    "curly": ["warn", "multi", "consistent"], // Enforce consistent brace style for all control statements
    "dot-notation": "warn", // Enforce dot notation whenever possible
    "eqeqeq": "warn", // Require the use of "===" and "!=="
    "logical-assignment-operators": "warn", // Require logical assignment logical operator shorthand
    "multiline-comment-style": "off", // Enforce multiline comment style (off because it doesn"t seem to be automatically fixing)
    "no-confusing-arrow": "off", // Disallow arrow functions where they could be confused with comparisons (off when using Prettier)
    "no-div-regex": "warn", // Disallow division operators explicitly at the beginning of regular expressions
    "no-else-return": "warn", // Disallow "else" blocks after "return" statemens in "if" statements
    "no-extra-bind": "warn", // Disallow unnecessary calls to ".bind()"
    "no-extra-boolean-cast": "warn", // Disallow unnecessary boolean casts
    "no-extra-label": "warn", // Disallow unnecessary labels
    "no-extra-semi": "off", // Disallow unnecessary semicolons (off when using Prettier)
    "no-floating-decimal": "off", // Disallow leading or trailing decimal points in numeric literals (off when using Prettier)
    "no-implicit-coercion": ["warn", { "allow": ["!!"] }], // Disallow shorthand type conversions (except for !!)
    "no-lonely-if": "warn", // Disallow "if" statements as the only statement in "else" blocks
    "no-regex-spaces": "warn", // Disallow multiple spaces in regular expressions
    "no-undef-init": "warn", // Disallow initializing variables to undefined
    "no-unneeded-ternary": "warn", // Disallow ternary operations when simpler alternatives exist
    "no-unused-labels": "warn", // Disallow unused labels
    "no-useless-computed-key": "warn", // Disallow unnecessary computer property keys in objects and classes
    "no-useless-rename": "warn", // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-return": "warn", // Disallow redundant return statements
    "no-var": "warn", // Require "let" or "const" instead of "var"
    "object-shorthand": "warn", // Require method and property shorthand syntax for object literals
    "one-var": ["warn", "never"], // Enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line": "off", // Require new lines around variable declarations (off when using Prettier)
    "operator-assignment": "warn", // Require assignment operator shorthand where possible
    "prefer-arrow-callback": "warn", // Require using arrow functions for callbacks
    "prefer-const": "warn", // Require "const" declarations for variables that are never reassigned after declared
    "prefer-destructuring": "warn", // Require destructuring from arrays and/or objects
    "prefer-exponentiation-operator": "warn", // Disallow the use of "Math.pow" in favor of the "**" operator
    "prefer-numeric-literals": "warn", // Disallow "parseInt()" and "Number.parseInt()" in favor of binary, octal, and hexadecimal literals
    "prefer-object-has-own": "warn", // Disallow the use of "Object.prototype.hasOwnProperty.call()" and prefer use of "Object.hasOwn()"
    "prefer-object-spread": "warn", // Disallow using Objext.assign with an object literal as the first argument and prefer the use of object spread instead
    "prefer-template": "warn", // Require template literals instead of string concatenation
    "quote-props": "off", // Require quotes around object literal property names (off when using Prettier)
    "sort-imports": "off", // Enforce sorted import declarations within modules (doesn't seem to actually fix them)
    "sort-vars": "warn", // Require variables within the scame declaration block to be sorted
    "spaced-comment": "warn", // Enforce consitent spacing after the "//" or "/*" in a comment
    "strict": "off", // Require strict mode directives
    "yoda": "warn", // Disallow "Yoda" conditions (ex. if ("red" === color))

    /* NOT automatically fixed with --fix */
    "accessor-pairs": "warn", // Enforce getter and setter pairs in objects and classes
    "block-scoped-var": "warn", // Enforce the use of variables within the scope their defined
    "camelcase": "warn", // Enforces camelcase naming convention
    "class-methods-use-this": "warn", // Enforce that class methods utilize "this"
    "complexity": "off", // Enforce a maximum cyclomatic complexity allowed in a program
    "consistent-return": "warn", // Require "return" statements to either always or never specify values
    "consistent-this": "warn", // Enforce consistent naming when capturing the current execution context
    "default-case": "off", // Require "default" case in "switch" statements
    "default-case-last": "warn", // Require default clauses in switch statements to be last
    "default-param-last": "warn", // Require default parameters to be last
    "func-name-matching": "warn", // Require function names to match the name of the variable or property to which they are assigned
    "func-names": "warn", // Require named "function" expressions
    "func-style": "warn", // Require function expressions instead of function declarations
    "grouped-accessor-pairs": "warn", // Require grouped accessor pairs in object literals and classes
    "guard-for-in": "warn", // Require "for-in" loops to include an if statement
    "id-denylist": ["warn", "callback"], // Disallow specified identifiers (words listed after severity)
    "id-length": ["warn", { "min": 2 }], // Enforce minimum (and maximum if added) identifier lengths
    "id-match": "off", // Enforce a pattern match for identifiers
    "init-declarations": "warn", // Require variable initializations at declaration
    "max-classes-per-file": "off", // Enforce a maximum number of classes per file
    "max-depth": "off", // Enforce a maximum depth that blocks can be nested
    "max-lines": "off", // Enforce a maximum number of lines per file
    "max-lines-per-function": "off", // Enforce a maximum number of lines of code in a function
    "max-nested-callbacks": "off", // Enforce a maximum depth of callbacks that can be nested
    "max-params": "off", // Enforce a maximum number of parameters in function declarations
    "max-statements": "off", // Enforce a maximum number of statements allowed in function blocks
    "new-cap": "warn", // Require constructor names to start with a capital letter
    "no-alert": "warn", // Disallow the use of "alert", "confirm", and "prompt"
    "no-array-constructor": "warn", // Disallow "Array" constructors (except for empty arrays with specified lengths)
    "no-bitwise": "off", // Disallow bitwise operators
    "no-caller": "warn", // Disallow the use of "arguments.caller" or "arguments.callee"
    "no-case-declarations": "warn", // Disallow lexical declarations in case clauses
    "no-console": "warn", // Disallow the use of "console"
    "no-continue": "warn", // Disallow the use of "continue" statements
    "no-delete-var": "warn", // Disallow deleting variables
    "no-empty-function": "off", // Disallow empty function statements (comments count as not empty)
    "no-empty-static-block": "off", // Disallow empty static block statements (comments count as not empty)
    "no-eq-null": "warn", // Disallow "null" comparisons without type-checking operators (no == or !=, but require === or !==)
    "no-eval": "off", // Disallow the use of "eval()"
    "no-extend-native": "warn", // Disallow extending native types
    "no-global-assign": "warn", // Disallow assignments to native objects or read-only global variables
    "no-implicit-globals": "warn", // Disallow declarations in the global scope
    "no-implied-eval": "warn", // Disallow th euse of "eval()"-like methods
    "no-inline-comments": "off", // Disallow inline comments after code
    "no-invalid-this": "warn", // Disallow use of "this" in contexts where the value of "this" is "undefined"
    "no-iterator": "warn", // Disallow the user of the "__iterator__" property
    "no-label-var": "warn", // Disallow labels that share a name with a variable
    "no-labels": "warn", // Disallow labeled statements
    "no-lone-blocks": "warn", // Disallow unnecessary nested blocks
    "no-loop-func": "warn", // Disallow function declarations that contain unsafe references inside loop statements
    "no-magic-numbers": "off", // Disallow magic numbers (enforces use of constants/naming of number values)
    "no-mixed-operators": "off", // Disallow mixed binary operators without explicitly separating with parentheses (off when using Prettier)
    "no-multi-assign": "warn", // Disallow us of chained assignment expressions (ex. var foo = bar = "baz")
    "no-multi-str": "warn", // Disallow multiline strings using "\" (must use "+" instead)
    "no-negated-condition": "warn", // Disallow negated conditions
    "no-nested-ternary": "warn", // Disallow nested ternaries
    "no-new": "warn", // Disallow "new" operators outside of assignments or comparisons
    "no-new-func": "off", // Disallow "new" operators with the "Function" object
    "no-new-object": "off", // Disallow "Object" constructors
    "no-new-wrappers": "off", // Disallow "new" operators with "String", "Number", and "Boolean" objects
    "no-nonoctal-decimal-escape": "warn", // Disallow "\8" and "\9" escape sequences in string literals
    "no-octal": "warn", // Disallow octal literals
    "no-octal-escape": "off", // Disallow octal escape sequences in string literals
    "no-param-reassign": "warn", // Disallow reassigning "function" parameters
    "no-plusplus": "warn", // Disallow the unary operators "++" and "--"
    "no-proto": "warn", // Disallow the use of the "__proto__" property
    "no-redeclare": ["warn", { "builtinGlobals": false }], // Disallow variable redecleration
    "no-restricted-exports": "off", // Disallow specified names in exports (each string after severity)
    "no-restricted-globals": "off", // Disallow specified global variables (each string after severity)
    "no-restricted-imports": "off", // Disallow specified modules when loaded by "import" (each string after severity)
    "no-restricted-properties": "off", // Disallow certain properties on certain objects (each string after severity)
    "no-restricted-syntax": "off", // Disallow specified syntax (each string after severity)
    "no-return-assign": "warn", // Disallow assignment operators in "return" statements
    "no-return-await": "warn", // Disallow unnecessary "return await"
    "no-script-url": "warn", // Disallow "javascript:" urls
    "no-sequences": "warn", // Disallow comma operators
    "no-shadow": "warn", // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow-restricted-names": "off", // Disallow identifiers from shadowing restricted names (each string after severity)
    "no-ternary": "off", // Disallow ternary operators
    "no-throw-literal": "warn", // Disallow throwing literals as exceptions
    "no-undefined": "off", // Disallow the use of "undefined" as an identifier
    "no-underscore-dangle": "warn", // Disallow dangling underscores in identifiers
    "no-unused-expressions": "warn", // Disallow unused expressions
    "no-useless-call": "warn", // Disallow unnecessary calls to ".call()" and ".apply()"
    "no-useless-catch": "warn", // Disallow unnecessary "catch" clauses
    "no-useless-concat": "warn", // Disallow unnecessary concatenation of literals or template literals
    "no-useless-constructor": "warn", // Disallow unnecessary constructors
    "no-useless-escape": "warn", // Disallow unnecessary escape characters
    "no-void": "warn", // Disallow "void" operators
    "no-warning-comments": ["warn", { "terms": ["todo", "fix"] }], // Disallow specified warning terms in comments
    "no-with": "warn", // Disallow "with" statements
    "prefer-named-capture-group": "off", // Enforce using named capture group in regular expression
    "prefer-promise-reject-errors": "off", // Require using Error objects as Promise rejection reasons
    "prefer-regex-literals": "warn", // Disallow use of the "RegExp" constructor in favor of regular expression literals
    "prefer-rest-params": "warn", // Require rest parameters instead of "arguments"
    "prefer-spread": "warn", // Require spread operators instead of ".apply()"
    "radix": "off", // Enforce the consistent use of radix argument when using "parseInt()"
    "require-await": "warn", // Disallow async functions which have no "await" expression
    "require-unicode-regexp": "off", // Enforce the use of "u" flag on RegExp
    "require-yield": "warn", // Require generator functions to contain "yield"
    "sort-keys": "off", // Require object keys to be sorted
    "symbol-description": "warn", // Require symbol descriptions
    "vars-on-top": "warn", // Require "var" declarations to be placed at the top of their containing scope

    /* Formatting */
    "array-bracket-newline": "off", // Enforce linebreaks after opening and before closing array brackets when using multiline (off when using Prettier)
    "array-bracket-spacing": ["off", "always", { "arraysInArrays": false, "objectsInArrays": false }], // Require space around array value(s) except for when value is an array or object (off when using Prettier)
    "array-element-newline": ["off", "consistent"], // Requires arrays elements to either be all on one line or all on separate lines (off when using Prettier)
    "arrow-parens": "off", // Requires parentheses around arrow function parameters (off when using Prettier)
    "arrow-spacing": "off", // Requires a space before and after the arrow function operator (=>) (off when using Prettier)
    "block-spacing": "off", // Requires a space of padding at beginnig and end of block statements with braces (off when using Prettier)
    "brace-style": "off", // Requires opening brace on same line and closing brace on new line (off when using Prettier)
    "comma-dangle": "off", // Requires or disallows trailing commas (off when using Prettier)
    "comma-spacing": "off", // Enforces consistent spacing before and after commas (none before, one after) (off when using Prettier)
    "comma-style": "off", // Requires commas to be on the end of lines (off when using Prettier)
    "computed-property-spacing": "off", // Enforce consistent spacing inside computed property brackets (off when using Prettier)
    "dot-location": ["off", "property"], // Enforce consistent newlines before and after dots (off when using Prettier)
    "eol-last": "off", // Require newline at the end of files (off when using Prettier)
    "func-call-spacing": "off", // Disallow spacing between function identifiers and their invocations (off when using Prettier)
    "function-call-argument-newline": ["off", "consistent"], // Enforce either all line breaks between arguments of a function call or no line breaks (off when using Prettier)
    "function-paren-newline": ["off", "multiline"], // Requires linebreaks after and before parens when multiline parameters (off when using Prettier)
    "generator-star-spacing": ["off", "before"], // Enforce consistent spacing around "*" operators in generator functions (ex function *generator()) (off when using Prettier)
    "implicit-arrow-linebreak": "off", // Enforce the location of arrow function bodies to be beside the arrow function on same line (off when using Prettier)
    "indent": ["off", 2], // Enforce consistent indentation (off when using Prettier)
    "jsx-quotes": "off", // Enforce consistent use of either double or single quuotes in JSX attributes (off when using Prettier)
    "key-spacing": "off", // Enforce consistent spacing between keys and values in object literal properties (off when using Prettier)
    "keyword-spacing": "off", // Enforce consistent spacing around keywords (off when using Prettier)
    "line-comment-position": "warn", // Enforce position of line comments
    "linebreak-style": "off", // Enforce consistent line break style (off when using Prettier)
    "lines-around-comment": "off", // Require empty lines around comments (only above block comment) (off when using Prettier)
    "lines-between-class-members": "warn", // Require lines between class members
    "max-len": "off", // Enforce maximum line length
    "max-statements-per-line": "warn", // Enforce a maximum number of statements allowed per line
    "multiline-ternary": ["off", "always-multiline"], // Enforce newlines between operands of ternary expressions (off when using Prettier)
    "new-parens": "off", // Enforce parentheses when invoking a constructor with no arguments (off when using Prettier)
    "newline-per-chained-call": "off", // Require a newline after each call in a method chain (off when using Prettier)
    "no-extra-parens": ["off", "all", { "ignoreJSX": "multi-line" }], // Disallow unnecessary parentheses (off when using Prettier)
    "no-multi-spaces": "off", // Disallow multiple spaces (off when using Prettier)
    "no-multiple-empty-lines": "off", //Disallow multiple empty lines (off when using Prettier)
    "no-trailing-spaces": "off", // Disallow trailing whitespace at the end of lines (off when using Prettier)
    "no-whitespace-before-property": "off", // Disallow whitespace before properties (off when using Prettier)
    "nonblock-statement-body-position": "off", // Enforce the location of single line statements (off when using Prettier)
    "object-curly-newline": "off", // Enforce consistent line breaks after opening and before closing braces (off when using Prettier)
    "object-curly-spacing": ["off", "always"], // Enforce consistent spacing inside braces (off when using Prettier)
    "object-property-newline": "off", // Enforce placing object properties on separate lines (off when using Prettier)
    "operator-linebreak": "off", // Enforces consistent linebreak style for operators (off when using Prettier)
    "padded-blocks": ["off", "never"], // Disallows padding within blocks (off when using Prettier)
    "padding-line-between-statements": "warn", // Specifies spacing between statements within a block (highly customizable)
    "quotes": ["warn", "backtick"], // Enforce consistent use of either backticks, double, or single quotes
    "rest-spread-spacing": "off", // Enforce spacing between rest and spread operators and their expressions (off when using Prettier)
    "semi": "off", // Require semicolons (off when using Prettier)
    "semi-spacing": "off", // Enforce consistent spacing before and after semicolons (off when using Prettier)
    "semi-style": "off", // Enforce location of semicolons (off when using Prettier)
    "space-before-blocks": "off", // Enforce consistent spacing before blocks (off when using Prettier)
    "space-before-function-paren": ["off", { "anonymous": "always", "named": "never", "asyncArrow": "always" }], // Enforce consitent spacing before "function" definition opening parentheses (off when using Prettier)
    "space-in-parens": "off", // Enforce consistent spacing inside parentheses (off when using Prettier)
    "space-infix-ops": "off", // Requires spacing around infix operators (off when using Prettier)
    "space-unary-ops": "off", // Enforce consistent spacing before or after unary operators (off when using Prettier)
    "switch-colon-spacing": "off", // Enforce spacing around colons of switch statements (off when using Prettier)
    "template-curly-spacing": "off", // Require spacing around embedded expressions of template strings (off when using Prettier)
    "template-tag-spacing": "off", // Require spacing between template tags and their literals (off when using Prettier)
    "unicode-bom": "off", // Disallow Unicode byte order mark (off when using Prettier)
    "wrap-iife": "off", // Require parentheses around immediate "function" invocations (off when using Prettier)
    "wrap-regex": "off", // Require parentheses around regex literals (off when using Prettier)
    "yield-star-spacing": ["off", "before"], // Require spacing around the "*" in "yield *" expressions (off when using Prettier)

    /**
     *
     * React rules (eslint-plugin-react) - https://github.com/jsx-eslint/eslint-plugin-react
     * React Hooks rules (eslint-plugin-react-hooks) - https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
     *
     */

    /* Automatically fixed with --fix */
    "react/destructuring-assignment": ["warn", "always", { "destructureInSignature": "always" }], // Enforce usage of destructuring assignments of props, state, and context
    "react/function-component-definition": [
      "warn",
      { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }
    ], // Enforces arrow functions for named and unamed components
    "react/jsx-boolean-value": [
      "warn",
      "never",
      {
        "always": [
          /* excpetions (ex. "personal") */
        ]
      }
    ], // Removes explicit boolean values for props (ex. "open" instead of "open={true}")
    "react/jsx-closing-bracket-location": ["off", { "nonEmpty": "after-props", "selfClosing": "after-props" }], // Enforces closing bracket on the same line as last prop (off when using Prettier)
    "react/jsx-closing-tag-location": "off", // Enforces closing tag aligned with opening tag (or same line for one-liners) (off when using Prettier)
    "react/jsx-curly-brace-presence": [
      "warn",
      { "children": "never", "props": "never", "propElementValues": "always" }
    ], // Removes curly braces around children and props unless actually needed
    "react/jsx-curly-newline": ["off", { "multiline": "require", "singleline": "forbid" }], // Requires newline before/after curly brace for multiline blocks and prevents them for single line (off when using Prettier)
    "react/jsx-curly-spacing": ["off", { "when": "always", "spacing": { "objectLiterals": "never" } }], // Requires spacing inside curlies (excpet for other curlies) (off when using Prettier)
    "react/jsx-equals-spacing": ["off", "never"], // Prevents space around = in JSX attributes (off when using Prettier)
    "react/jsx-first-prop-new-line": ["off", "multiline"], // Requires props to start on new line when there are mutliple lines/props (off when using Prettier)
    "react/jsx-fragments": ["warn", "syntax"], // Enforces <></> for React fragments
    "react/jsx-indent": ["off", 2], // Enforces 2 space indents (already covered by "indent")
    "react/jsx-indent-props": ["off", 2], // Enforces 2 space indents for props (off when using Prettier)
    "react/jsx-max-props-per-line": ["off", { "maximum": { "single": 5, "multi": 1 } }], // Allows up to 5 props on a single line, then forces 1 per line if more than 5 props (off when using Prettier)
    "react/jsx-newline": ["off", { "prevent": true }], // Enforces no line break padding between JSX elements (off when using Prettier)
    "react/jsx-no-leaked-render": "warn", // Prevents undesired renders by cooercing conditionals to boolean (ex changes "count && ..." to "!!count && .." to prevent "0" getting rendered)
    "react/jsx-no-target-blank": [
      "warn",
      {
        "allowReferrer": false,
        "enforceDynamicLinks": "always",
        "warnOnSpreadAttributes": false,
        "links": true,
        "forms": false
      }
    ], // Requires "rel="noreferrer"" when "target="_blank"" is used
    "react/jsx-no-useless-fragment": ["warn", { "allowExpressions": true }], // Removes unnecessary fragments
    "react/jsx-one-expression-per-line": ["off", { "allow": "single-child" }], // Enforces every expression is on it"s own line, except for literals and single children (ex. <App><Home/></App> is okay) (off when using Prettier)
    "react/jsx-props-no-multi-spaces": "off", // Enforces consistent spacing around props (not necessary when using "no-multi-spaces" from base ESLint) (off when using Prettier)
    "react/jsx-sort-props": "warn", // Enforces alphabetical order for props
    "react/jsx-tag-spacing": [
      "off",
      { "closingSlash": "never", "beforeSelfClosing": "never", "afterOpening": "never", "beforeClosing": "never" }
    ], // Enforces consistent spacing before/after tags (off when using Prettier)
    "react/jsx-wrap-multilines": [
      "off",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ], // Requires wrapping multiline statements in parentheses (off when using Prettier)
    "react/no-arrow-function-lifecycle": "warn", // Enforces lifecycle methods on the prototype instead of class fields
    "react/no-unknown-property": ["warn", { "ignore": [] }], // Disallow non-camelCased properties except for thos listed in the "ignore" array
    "react/prefer-read-only-props": "warn", // Enforces read-only prop types when using Flow
    "react/self-closing-comp": "warn", // Removes unnecessary closing tags
    "react/sort-prop-types": "warn", // Enforces alphabetical order for prop types

    /* NOT automatically fixed with --fix */
    "react-hooks/rules-of-hooks": "warn", // Enforces Rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Enforcess spare use of custom hook dependencies argument
    "react/boolean-prop-naming": ["warn", { "message": "boolean props should start with 'is' or 'has'" }], // Enforces boolean props starting with "is" or "has"
    "react/button-has-type": "warn", // Enforces "type" attribute on <button></button> elements so they don"t default to "type="submit""
    "react/default-props-match-prop-types": "warn", // Requires default props to have all the props that aren"t required
    "react/display-name": "warn", // Requires "displayName" prop when one can"t be generated by the transpiler
    "react/forbid-component-props": "off", // Disallows certain props on components (ex. style, className, etc.)
    "react/forbid-dom-props": "off", // Disallows passing props to DOM elements (ex. div)
    "react/forbid-elements": ["warn", { "forbid": [{ "element": "button", "message": "use <Button> instead" }] }], // Suggests components instead of certain DOM elements
    "react/forbid-foreign-prop-types": "off", // Forbids using another components prop types unless they"re explicitly imported/exported
    "react/forbid-prop-types": "off", // Forbids vague prop types (any, array, object by default)
    "react/hook-use-state": "warn", // Require value and setValue pair to be destructured from useState()
    "react/iframe-missing-sandbox": "warn", // Require sandbox attribute on iframes which is more secure
    "react/jsx-child-element-spacing": "off", // Require explicit spacing to prevent unexpected rendered spacing/whitespace (off when using Prettier)
    "react/jsx-handler-names": "warn", // Require onChange={handleChange} pattern in props
    "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".tsx"] }], // Prevent using non-JSX endings for files that contain JSX
    "react/jsx-key": "warn", // Require "key" prop in components that are a part of an iterator/collection
    "react/jsx-max-depth": "off", // Enforce maximum depth of JSX components
    "react/jsx-no-bind": ["warn", { "allowArrowFunctions": true }], // Forbids use of .bind() directly in props as it renders them each time and hurts performance
    "react/jsx-no-comment-textnodes": "warn", // Prevents comment strings from being injected as a text node in JSX statements
    "react/jsx-no-constructed-context-values": "warn", // Prevents non-stable values (object identities) from being used as a value for Context.Provider
    "react/jsx-no-duplicate-props": "warn", // Prevents duplicate props in JSX elements
    "react/jsx-no-literals": "off", // Prevents unwrapped string literals as JSX children
    "react/jsx-no-script-url": ["warn", [{ "name": "Link", "props": ["to"] }]], // Prevents javascipt: in URLs in a (href) and Link (to) elements
    "react/jsx-no-undef": "warn", // Prevents use of undefined/non-imported components
    "react/jsx-pascal-case": "warn", // Enforces PascalCase on JSX components
    "react/jsx-props-no-spreading": "off", // Prevents spreading props (ex. { ...props })
    "react/jsx-uses-react": "warn", // Prevents importing React when React is not used
    "react/jsx-uses-vars": "warn", // Makes sure variables used in JSX elements are not considered unused by "no-unused-vars"
    "react/no-access-state-in-setstate": "warn", // Prevents use of this.state inside of a setState call
    "react/no-adjacent-inline-elements": "warn", // Requires inline elements to be separated by whitespace
    "react/no-array-index-key": "warn", // Prevents use of index value in "key" prop
    "react/no-children-prop": "warn", // Prevents children from being a prop and require them to be actual children between the opening and closing tags
    "react/no-danger": "warn", // Prevents dangerous JSX properties (ex. dangerouslySetInnerHTML)
    "react/no-danger-with-children": "warn", // Prevents problems caused by using children and the dangerouslySetInnerHTML prop at the same time
    "react/no-deprecated": "warn", // Prevent use of deprecated methods
    "react/no-did-mount-set-state": "warn", // Prevent use of setState in componentDidMount
    "react/no-did-update-set-state": "warn", // Prevent use of setState in componentDidUpdate
    "react/no-direct-mutation-state": "warn", // Prevents mutating this.state direction as setState could override it later
    "react/no-find-dom-node": "warn", // Prevent use of findDOMNode as it prevents React improvements in the future
    "react/no-invalid-html-attribute": "warn", // Prevent usage of invalid HTML attributes
    "react/no-is-mounted": "warn", // Prevents use of isMounted since it is not available when using ES6 and will soon be deprecated
    "react/no-multi-comp": ["warn", { "ignoreStateless": true }], // Prevents defining multiple components in a single file (unless stateless components)
    "react/no-namespace": "warn", // Prevents uses of namespaces in React elements since they"re not supported
    "react/no-object-type-as-default-prop": "warn", // Prevents object type values being used as default props to prevent unnecessary renders
    "react/no-redundant-should-component-update": "warn", // Prevents having "shouldComponentUpdate" defined when defining a component that extends React.PureComponent
    "react/no-render-return-value": "warn", // Prevents use of ReactDOM.render() as a return value
    "react/no-set-state": "off", // Prevents use of local component state
    "react/no-string-refs": "warn", // Prevents using string identifier to refer to React components
    "react/no-this-in-sfc": "warn", // Prevents use of "this" inside of stateless functional components
    "react/no-typos": "warn", // Prevents casing typos when declaring static class properties and lifecycle methods
    "react/no-unescaped-entities": "warn", // Prevents characters that may have been meant as JSX escape characters from being accidentally injected as a text node
    "react/no-unstable-nested-components": "warn", // Prevents defining componenets inside of other components
    "react/no-unused-class-component-methods": "warn", // Prevents declaring unused methods of component class
    "react/no-unused-prop-types": "warn", // Prevents unused props with types defined
    "react/no-unused-state": "warn", // Prevents unused values declared in state
    "react/no-will-update-set-state": "warn", // Prevents updating the state during the componentWillUpdate step
    "react/prefer-es6-class": ["warn", "always"], // Enforces use of ES6 classes for React components
    "react/prefer-exact-props": "warn", // Ensure only exact prop definitions are used when writing components
    "react/prefer-stateless-function": "warn", // Ensures use of stateless functional components over class based components if they can be used
    "react/prop-types": "warn", // Encourage prop types for components
    "react/require-default-props": ["off", { "functions": "defaultArguments" }], // Require default values for non-required prop types and require them as an argument for functional components (ex. { foo = "foo" })
    "react/require-optimization": "off", // Prevent creating React components without declaring the shouldComponentUpdate method
    "react/require-render-return": "warn", // Require return statement in render() function
    "react/sort-comp": "warn", // Enforces consistent order of methods in React components using defaults here, but can further define order with these options: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-default-props": "warn", // Enforces alphabetical sorting of default props
    "react/state-in-constructor": ["warn", "always"], // Requires state to be defined in the constructor for class components
    "react/static-property-placement": "off", // Enforces location of static properties within the component
    "react/style-prop-object": "warn", // Requires style attributes to be wrapped in an object
    "react/void-dom-elements-no-children": "warn", // Prevent passing props to only self-closing elements (ex. img, br, hr, etc.)

    /**
     *
     * Imports (eslint-plugin-import) - https://github.com/import-js/eslint-plugin-import
     *
     */

    /* Rules that prevent errors or possible errors (not fixable with --fix) */
    "import/export": "error", // Forbid invalid exports (same name, etc.)
    "import/default": "error", // Ensure a default export is present, given a default import
    "import/named": "off", // Ensure named imports correspond to a named export in the remote file (off for TypeScript)
    "import/namespace": "error", // Ensure imported namespaces contain dereferenced properties as they are derefferenced
    "import/no-unresolved": "error", // Ensure imports point to a file/module that can be resolved

    /* Automatically fixed with --fix */
    "import/no-empty-named-blocks": "warn", // Forbid empty named import blocks
    "import/no-import-module-exports": "warn", // Forbid import statements with CommonJS module.exports
    "import/no-absolute-path": "warn", // Forbid import modules using absolute paths
    "import/no-relative-packages": "warn", // Forbit importing packages through relative paths
    "import/no-useless-path-segments": "warn", // Forbid unnecessary path segments in import and require statements
    "import/consistent-type-specifier-style": ["warn", "prefer-inline"], // Enforce the use of inline type-only markers for named imports (ex: import { type Bar } from Bar)
    "import/first": "warn", // Insure all imports appear before all other statements
    "import/newline-after-import": "warn", // Enforce a newline after import statements
    "import/no-duplicates": "warn", // Forbit repeated import of the same module in multiple places
    "import/no-namespace": "off", // Forbid namespace (aka wildcard (*)) imports
    "import/order": "off", // Enforces a consistent order of imports (goes against "sort-imports")

    /* NOT automatically fixed with --fix */
    "import/no-deprecated": "off", // Forbid imported names marked with @deprecated documentation tag
    "import/no-extraneous-dependencies": "warn", // Forbid the use of extraneous packages (imports of external packages not in package.json)
    "import/no-mutable-exports": "warn", // Forbid the use of mutable exports with var or let
    "import/no-unused-modules": "warn", // Forbid modules without exports, or exports without matching import in another module
    "import/no-amd": "off", // Forbid AMD require and define calls
    "import/no-commonjs": "off", // Forbid CommonJS require calls and module.exports or exports.*
    "import/no-nodejs-modules": "off", // Forbid Node.js builtin modules
    "import/unambigous": "off", // Forbid potentially ambiguous parse goal
    "import/no-cycle": "warn", // Forbid a module from importing a module with a dependency path back to itself
    "import/no-dynamic-require": "warn", // Forbid require() calls with expressions
    "import/no-internal-modules": "off", // Forbid importing the submodules of other modules
    "import/no-relative-parent-imports": "off", // Forbid importing modules from parent directories
    "import/no-restricted-paths": "off", // Enforce with files can be imported in a given folder
    "import/no-self-import": "warn", // Forbid a module from importing itself
    "import/no-webpack-loader-syntax": "warn", // Forbid webpack loader syntax in imports
    "import/dynamic-import-chunkname": "off", // Enforce leading comment with the webpackChunkName for dynamic imports
    "import/exports-last": "off", // Ensure all exports appear after other statements
    "import/extensions": ["warn", "never"], // Ensure consistent use of filetype extensions (none)
    "import/group-exports": "off", // Prefer named exports to be grouped together in a single export declaration
    "import/max-dependencies": "off", // Enforce the maximum number of dependencies a module can have
    "import/no-anonymous-default-export": "warn", // Forbid anonymous values as default exports
    "import/no-default-export": "off", // Forbid default exports
    "import/no-named-default": "off", // Forbid named default exports
    "import/no-named-export": "off", // Forbid named exports
    "import/no-unassigned-import": ["warn", { "allow": ["@testing-library/jest-dom", "**/*.css"] }], // Forbid unassigned imports
    "import/prefer-default-export": "off" // Prefer a default export if module exports a single name or multiple names
  },
  "overrides": [
    {
      "files": ["**/__tests__/**", "**/*.test.tsx"],
      "plugins": ["jest", "jest-dom", "testing-library"],
      "rules": {
        /**
         *
         * Jest rules (eslint-plugin-jest) - https://github.com/jest-community/eslint-plugin-jest
         *
         */

        /* Automatically fixed with --fix */
        "jest/consistent-test-it": "warn", // Enforce "test" and "it" usage conventions
        "jest/no-alias-methods": "warn", // Disallow alias methods
        "jest/no-deprecated-functions": "warn", // Disallow use of deprecated functions
        "jest/no-jasmine-globals": "warn", // Disallow Jasmine globals
        "jest/no-test-prefixes": "warn", // Require using ".only" and ".skip" over "f" and "x"
        "jest/prefer-comparison-matcher": "warn", // Suggest using the built-in comparison matchers
        "jest/prefer-expect-resolves": "warn", // Prefer "await expect(...).resolves" over "expect(await ...)" syntax to better handle errors and keep consistent with .rejects, also helps find redundant awaits
        "jest/prefer-lowercase-title": "warn", // Enforce lowercase test names
        "jest/prefer-mock-promise-shorthand": "warn", // Prefer mock resolved/rejected shorthands for promises
        "jest/prefer-spy-on": "warn", // Prefer using "jest.spyOn()"
        "jest/prefer-to-be": "warn", // Prefer using "toBe()" for primitive literals
        "jest/prefer-to-contain": "warn", // Suggest using "toContain()"
        "jest/prefer-to-have-length": "warn", // Suggest using "toHaveLength()"
        "jest/prefer-todo": "warn", // Suggest using "test.todo"

        /* NOT automatically fixed with --fix */
        "jest/expect-expect": "warn", // Enforce assertion to be made in the test body
        "jest/max-expects": "off", // Enforces a maximum number of assertion calls in test body
        "jest/max-nested-describe": "off", // Enforces a maximum depth of nested describe calls
        "jest/no-commented-out-tests": "warn", // Disallow commented out tests
        "jest/no-conditional-expect": "warn", // Disallow calling "expect" conditionally
        "jest/no-conditional-in-test": "off", // Disallow conditional logic in tests
        "jest/no-disabled-tests": "warn", // Disallowed disabled tests
        "jest/no-done-callback": "warn", // Disallow using a callback in asyncronous tests and hooks
        "jest/no-duplicate-hooks": "warn", // Disallow duplicate setup and teardown hooks within a single describe
        "jest/no-export": "warn", // Disallow using "exports" in files containing tests
        "jest/no-focused-tests": "warn", // Disallow focused tests
        "jest/no-hooks": "off", // Disallow setup and teardown hooks
        "jest/no-identical-title": "warn", // Disallow identical titles
        "jest/no-interpolation-in-snapshots": "warn", // Disallow string interpolation inside snapshots
        "jest/no-large-snapshots": "off", // Disallow large snapshots
        "jest/no-mocks-import": "warn", // Disallow manually importing from "__mocks__"
        "jest/no-restricted-jest-methods": "off", // Disallow specific "jest." methods
        "jest/no-restricted-matchers": "off", // Disallow specific matchers and modifiers
        "jest/no-standalone-expect": "warn", // Disallow using "expect" outside of "it" or "test" blocks
        "jest/no-test-return-statement": "off", // Disallow explicitly returning from tests
        "jest/prefer-called-with": "warn", // Suggest using "toBeCalledWith()" or "toHaveBeenCalledWith()"
        "jest/prefer-each": "off", // Prefer using ".each" rather than manual loops
        "jest/prefer-equality-matcher": "off", // Suggest using the built-in equality matchers
        "jest/prefer-expect-assertions": "off", // Suggest using "expect.assertions()" or "expect.hasAssertions()"
        "jest/prefer-hooks-in-order": "warn", // Prefer having hooks in a consistent order
        "jest/prefer-hooks-on-top": "warn", // Suggest having hooks before any test cases
        "jest/prefer-snapshot-hint": "off", // Prefer including a hint with external snapshots
        "jest/prefer-strict-equal": "warn", // Prefer "toStrictEqual()"
        "jest/require-hook": "warn", // Require setup and teardown code to be within a hook
        "jest/require-to-throw-message": "warn", // Require a message for "toThrow()"
        "jest/require-top-level-describe": "warn", // Require test cases and hooks to be inside a "describe" block
        "jest/valid-describe-callback": "warn", // Enforce valid "describe()" callback
        "jest/valid-expect": "warn", // Enforce valid "expect()" usage
        "jest/valid-expect-in-promise": "warn", // Require promises that have expectations in their chain to be valid
        "jest/valid-title": "warn", // Enforce valid titles

        /**
         *
         * Jest DOM rules (eslint-plugin-jest-dom) - https://github.com/testing-library/eslint-plugin-jest-dom
         *
         */

        /* Automatically fixed with --fix */
        "jest-dom/prefer-checked": "warn", // prefer toBeChecked over checking attributes
        "jest-dom/prefer-empty": "warn", // Prefer toBeEmpty over checking innerHTML
        "jest-dom/prefer-enabled-disabled": "warn", // prefer toBeDisabled or toBeEnabled over checking attributes
        "jest-dom/prefer-focus": "warn", // prefer toHaveFocus over checking document.activeElement
        "jest-dom/prefer-in-document": "warn", // Prefer .toBeInTheDocument() for asserting the existence of a DOM node
        "jest-dom/prefer-required": "warn", // prefer toBeRequired over checking properties
        "jest-dom/prefer-to-have-attribute": "warn", // prefer toHaveAttribute over checking getAttribute/hasAttribute
        "jest-dom/prefer-to-have-class": "warn", // prefer toHaveClass over checking element className
        "jest-dom/prefer-to-have-style": "warn", // prefer toHaveStyle over checking element style
        "jest-dom/prefer-to-have-text-content": "warn", // Prefer toHaveTextContent over checking element.textContent
        "jest-dom/prefer-to-have-value": "warn", // prefer toHaveValue over checking element.value

        /**
         *
         * Testing library rules (eslint-plugin-testing-library) - https://github.com/testing-library/eslint-plugin-testing-library
         *
         */

        /* Automatically fixed with --fix */
        "testing-library/no-dom-import": "warn", // Ensure that there are no direct imports from @testing-library/dom or dom-testing-library when using some testing library framework wrapper.
        "testing-library/no-global-regexp-flag-in-query": "warn", // Ensure that there are no global RegExp flags used when using queries.
        "testing-library/prefer-find-by": "warn", // Use findBy queries instead of waitFor(getBy)
        "testing-library/prefer-wait-for": "warn", // Prefer using waitFor over deprecated functions

        /* NOT automatically fixed with --fix */
        "testing-library/await-async-query": "warn", // Ensure that promises returned by async queries are handled properly.
        "testing-library/await-async-utils": "warn", // Ensure that promises returned by async utils are handled properly.
        "testing-library/no-await-sync-events": "warn", // Remove unnecessary awaits from sync events
        "testing-library/consistent-data-testid": "off", // Can require data-testid values to match regex
        "testing-library/no-await-sync-query": "warn", // Remove unnecessary awaits from sync queries
        "testing-library/no-container": "warn", // Disallows the use of container methods like .querySelector
        "testing-library/no-debugging-utils": "warn", // Disallows debug statements in tests
        "testing-library/no-manual-cleanup": "warn", // Prevent manual cleanup methods since the framework already supports it
        "testing-library/no-node-access": "warn", // Disallows accessing the DOM natively since the framework provides special ways for doing so
        "testing-library/no-promise-in-fire-event": "warn", // Prevent using promises in fireEvent since it will cause errors
        "testing-library/no-render-in-setup": "warn", // Disallow using render (or render functions) in setup functions
        "testing-library/no-unnecessary-act": "warn", // Disallow unnecessary uses of act just to try and silence act warnings
        "testing-library/no-wait-for-empty-callback": "warn", // Disallow empty callbacks in waitFor and waitForElementToBeRemoved to follow library design
        "testing-library/no-wait-for-multiple-assertions": "warn", // Limit one assertion (expect) to each waitFor to allow for proper behavior and faster failing
        "testing-library/no-wait-for-side-effects": "warn", // Prevent use of side effect actions (fireEvent, userEvent, render) inside waitFor as they will cause effects to run multiple times
        "testing-library/no-wait-for-snapshot": "warn", // Prevent calls to toMatchSnapshot or toMatchInlineSnapshot inside of waitFor
        "testing-library/prefer-explicit-assert": "warn", // Prevents the use of getBy and findBy queries just to check if an element is present without assertions
        "testing-library/prefer-presence-queries": "warn", // Encourage use of getBy when expecting presence and queryBy when expecting the element to be missing
        "testing-library/prefer-query-by-disappearance": "warn", // Require queryBy queries when using waitForElementToBeRemoved to prevent false negatives if the element was already removed
        "testing-library/prefer-screen-queries": "warn", // Encourage use of queries off of the provided screen object
        "testing-library/prefer-user-event": "warn", // Prefer userEvent over fireEvent for testing to better simulate user behavior (can make exceptions later)
        "testing-library/render-result-naming-convention": "warn" // Only allow destructuring, 'view', or 'utils' when assinging the return from render() method to prevent confusion with wrapper from Enzyme
      }
    }
  ]
}
