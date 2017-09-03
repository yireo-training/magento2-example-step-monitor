define([
    'uiComponent'
], function (_, Component) {
    'use strict';

    return function (target) {
        target.originalNext = target.next;
        target.next = function() {
            console.log('next()');
            return this.originalNext();
        };

        return target;
    };
});