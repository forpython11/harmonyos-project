"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.output=void 0;const t=e(require("../log"));exports.output=function(e){t.default.clearProgress(),console.log(e),t.default.showProgress()};