define([
    "jquery"
], function ($) {
    'use strict';

    function privateFunction() {
        return "this is a private function";
    }

    return function () {

        var message = privateFunction();
        console.log(message);

    }

});