"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrintUtil=void 0;const t=e(require("../log"));function o(e){t.default.disableProgress(),console.log(e)}exports.PrintUtil={print:o,printCostTime:function(e,t){const i=(new Date).getTime()-e;o(`${t?`${t} `:""}completed in ${Math.floor(i/1e3)}s ${i%1e3}ms`)}};