"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var i={};if(null!=n)for(var r in n)"default"!==r&&Object.prototype.hasOwnProperty.call(n,r)&&e(i,n,r);return t(i,n),i},i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function u(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}s((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.updatePackageJson=void 0;const o=r(require("path")),u=require("../../common/Constants"),c=require("../../util"),s=n(require("lodash"));exports.updatePackageJson=function(e,t){return i(this,void 0,void 0,(function*(){const n=o.default.join(e,u.Constants.MyPackageJson);let i={};c.FsUtil.existsSync(n)&&(i=c.FsUtil.readJSON5Sync(n)),s.isEqual(void 0===i.dependencies?{}:i.dependencies,t.dependencies)&&s.isEqual(void 0===i.devDependencies?{}:i.devDependencies,t.devDependencies)||(Object.keys(t).forEach((e=>{i[e]=t[e]})),c.FsUtil.writeFileSync(n,JSON.stringify(i,null,2)))}))};