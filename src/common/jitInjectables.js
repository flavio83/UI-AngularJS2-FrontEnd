/// <reference path="../../typings/tsd.d.ts" />
var change_detection_1 = require('angular2/change_detection');
var di_1 = require('angular2/di');
exports.jitInjectables = [
    di_1.bind(change_detection_1.ChangeDetection).toClass(change_detection_1.JitChangeDetection)
];
//# sourceMappingURL=jitInjectables.js.map