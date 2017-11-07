# stylelint-config-wandi

Wandi StyleLint configuration

## Install

This package has some peer dependencies. The recommended way to install it and
its peer dependencies in a single command is to install
[`install-peerdeps`](https://github.com/nathanhleung/install-peerdeps) and run
it :

```
npm install -g install-peerdeps
install-peerdeps --dev @wandiparis/stylelint-config-wandi
```

## How to use

In your StyleLint configuration file (we assume you use JS format in this
documentation, please refer to
[StyleLint documentation](http://stylelint.io/user-guide/configuration/#loading-the-configuration-object)
to see other supported formats), add the following `extends` property :

```js
module.exports = {
    extends: "@wandiparis/stylelint-config-wandi"
}
```

## Rules

The config extends some other configurations :

* [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended)
* Some rules from [`stylelint-scss` plugin](https://github.com/kristerkari/stylelint-scss). See `index.js` for the detail.
