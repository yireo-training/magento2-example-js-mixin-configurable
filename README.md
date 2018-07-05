# Example JS mixin for `Magento_Configurable`
Example Magento 2 module showing how to use a mixin to overwrite `Magento_Configurable`

## Installation
To install use the following composer command:

    composer require yireo-training/magento2-example-js-mixin-configurable:dev-master

Next enable the module:

    bin/magento module:enable Yireo_ExampleJsMixinConfigurable
    bin/magento setup:upgrade
    
And flush the cache:

    bin/magento cache:clean

# Proof of concept
After installing the module, the `priceHolderSelector` option of the original configurable component should
have a new value.
