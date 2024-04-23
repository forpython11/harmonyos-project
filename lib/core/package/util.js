"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.output=exports.validateGroup=exports.validateAuthorStringFun=exports.validateAuthorFun=exports.validateLicenseFun=exports.validateVersionFun=exports.validateNameFun=void 0;const n=e(require("../../log/log")),t=require("../../util/validatePackage"),a=require("../../util"),i=require("semver"),r=/^[\u4e00-\u9fa5_a-zA-Z0-9-./\s]+$/,o=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,l=/^(?![0-9\-_])[a-z0-9\-_]{1,36}$/;function s(e){return e.name.length>128?(u(`author name cannot be empty or contain more than 128 characters: ${e.name}`),!1):e.email.length>64?(u(`author email cannot contain more than 64 characters: ${e.email}`),!1):e.name&&!r.test(e.name)?(u(`Invalid author name: ${e.name}`),!1):!(e.email&&!o.test(e.email))||(u(`Invalid author email: ${e.email}`),!1)}function u(e){a.PrintUtil.print(e)}exports.validateNameFun=function(e,a){const i=(0,t.validatePackageName)(e,!0);if("group"===a&&e.includes("."))return u("name contains invalid characters"),!1;if(i.validForPackages){const n=e.startsWith("@")?e.split("/")[0]:"";if(n.length>37)return u(`group name cannot contain more than 36 characters: ${n}`),!1;{const n=function(e,n){if(!new RegExp("^(@(?![0-9\\-_])[a-z0-9\\-_]+(?<![\\-_])/)?(?![0-9\\-_.])[a-z0-9\\-_.]+(?<![\\-_.])$").test(e))return u("name contains invalid characters"),!1;return!0}(e);return!!n&&e}}const r=i.errors||[];return"init"===a?u(`Sorry, ${r.join(" and ")}.`):n.default.error("",`Invalid package name: ${e} - ${r.join(" and ")}.`),!1},exports.validateVersionFun=function(e){return i.valid(e)?e.length<=64?e:(u(`version is empty or cannot contain more than 64 characters: ${e}`),!1):(u(`Invalid version: "${e}"`),!1)},exports.validateLicenseFun=function(e){return e.length<256?{type:!0,license:e}:(u("license cannot contain more than 256 characters."),{type:!1,license:e})},exports.validateAuthorFun=function(e){const n=e?e.split(","):[],t={name:"",email:""};return n.length&&n.map((e=>{if(e.toLowerCase().includes("name:")){const n=e.replace(/name:/i,"name:").indexOf("name:");t.name=e.slice(n+5)}if(e.toLowerCase().includes("email:")){const n=e.replace(/email:/i,"email:").indexOf("email:");t.email=e.slice(n+6)}})),t.name?!!s(t)&&t:(u("The author name is mandatory and cannot be empty."),!1)},exports.validateAuthorStringFun=function(e){const n=e?function(e){var n,t;const a=null===(n=e.match(/</g))||void 0===n?void 0:n.length,i=null===(t=e.match(/>/g))||void 0===t?void 0:t.length,r={name:"",email:""};if(e.includes("<")&&">"===e.slice(-1)){const n=e.split("<");return r.name=n[0],r.email=1===a&&1===i?n[1].slice(0,n[1].length-1):e.slice(r.name.length),r}return r.name=e,r}(e):{name:"",email:""};if(!s(n))return!1;const t=n.email?`<${n.email.trim()}>`:"";return n.name?`${n.name.trim()}${t}`:(u("The author name is mandatory and cannot be empty."),!1)},exports.validateGroup=function(e){return!!l.test(e)||(u("group invalid"),!1)},exports.output=u;