define(['jquery'], function ($) {
    'use strict';

    return function (target) {

        target.options.priceHolderSelector = '.my-price-box';

        return target;
    };
});
