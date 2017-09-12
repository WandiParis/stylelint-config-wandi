# stylelint-config-wandi

Wandi StyleLint configurations

## Install

To install the configuration, you just have to run the following command :

```
npm install --save-dev @wandiparis/stylelint-config-wandi
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
