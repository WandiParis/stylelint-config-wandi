module.exports = {
    rules: {
        // Color (http://stylelint.io/user-guide/rules/#color)
        "color-hex-case": ["lower", { severity: "warning" }],
        "color-hex-length": ["short", { severity: "warning" }],
        "color-no-invalid-hex": true,

        // Font family (http://stylelint.io/user-guide/rules/#font-family)
        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,

        // Function (http://stylelint.io/user-guide/rules/#function)
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "always",
        "function-whitespace-after": "always",

        // Number (http://stylelint.io/user-guide/rules/#number)
        "number-leading-zero": ["always", { severity: "warning" }],
        "number-max-precision": 6,
        "number-no-trailing-zeros": [true, { severity: "warning" }],

        // String (http://stylelint.io/user-guide/rules/#string)
        "string-no-newline": true,
        "string-quotes": ["double", { severity: "warning" }],

        // Length (http://stylelint.io/user-guide/rules/#length)
        "length-zero-no-unit": [true, { severity: "warning" }],

        // Time (http://stylelint.io/user-guide/rules/#time)
        "time-no-imperceptible": true,

        // Unit (http://stylelint.io/user-guide/rules/#unit)
        "unit-case": "lower",
        "unit-no-unknown": true,

        // Value (http://stylelint.io/user-guide/rules/#value)
        "value-keyword-case": "lower",
        "value-no-vendor-prefix": true,

        // Value list (http://stylelint.io/user-guide/rules/#value-list)
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,

        // Shorthand property (http://stylelint.io/user-guide/rules/#shorthand-property)
        "shorthand-property-no-redundant-values": [true, { severity: "warning" }],

        // Property (http://stylelint.io/user-guide/rules/#property)
        "property-case": "lower",
        "property-no-unknown": true,
        "property-no-vendor-prefix": true,

        // Declaration (http://stylelint.io/user-guide/rules/#declaration)
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-space-after": ["always", { severity: "warning" }],
        "declaration-colon-space-before": ["never", { severity: "warning" }],

        // Declaration block (http://stylelint.io/user-guide/rules/#declaration-block)
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-ignored-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",

        // Block (http://stylelint.io/user-guide/rules/#block)
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": ["always", { severity: "warning" }],
        "block-closing-brace-newline-before": ["always", { severity: "warning" }],
        "block-no-empty": true,
        "block-no-single-line": true,
        "block-opening-brace-newline-after": ["always", { severity: "warning" }],
        "block-opening-brace-space-before": ["always", { severity: "warning" }],

        // Selector (http://stylelint.io/user-guide/rules/#selector)
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-combinator-space-after": ["always", { severity: "warning" }],
        "selector-combinator-space-before": ["always", { severity: "warning" }],
        "selector-descendant-combinator-no-non-space": true,
        "selector-max-compound-selectors": 4,
        "selector-no-empty": true,
        "selector-no-id": true,
        "selector-no-qualifying-type": true,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-root-no-composition": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "selector-max-empty-lines": 0,

        // Selector list (http://stylelint.io/user-guide/rules/#selector-list)
        "selector-list-comma-newline-after": ["always", { severity: "warning" }],
        "selector-list-comma-newline-before": ["never-multi-line", { severity: "warning" }],
        "selector-list-comma-space-before": ["never", { severity: "warning" }],

        // Root rule (http://stylelint.io/user-guide/rules/#root-rule)
        "root-no-standard-properties": true,

        // Rule (http://stylelint.io/user-guide/rules/#rule)
        "rule-nested-empty-line-before": "never",
        "rule-non-nested-empty-line-before": "always",

        // Media feature (http://stylelint.io/user-guide/rules/#media-feature)
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-no-missing-punctuation": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        // At rule (http://stylelint.io/user-guide/rules/#at-rule)
        "at-rule-empty-line-before": ["always", { severity: "warning" }],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always",
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": ["always", { severity: "warning" }],

        // stylelint-disable comment (http://stylelint.io/user-guide/rules/#stylelint-disable-comment)
        "stylelint-disable-reason": "always-before",

        // Comment (http://stylelint.io/user-guide/rules/#comment)
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",

        // General / sheet (http://stylelint.io/user-guide/rules/#general--sheet)
        "indentation": 4, // autofix
        "max-empty-lines": 1,
        "max-nesting-depth": 4,
        "no-browser-hacks": true,
        "no-descending-specificity": true,
        "no-duplicate-selectors": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true
    }
}
