module.exports = {
    "extends": "stylelint-config-recommended",
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        // Turn off stylelint's built-in `at-rule-no-unknown` in favor of
        // stylelint-scss one
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "dollar-variable-no-missing-interpolation": true,
        "selector-no-redundant-nesting-selector": true,
    },
};
