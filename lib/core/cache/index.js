"use strict";var t=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPkgPath=void 0;const i=require("../registry/registry"),r=require("../../config"),n=e(require("path")),o=e(require("../../log")),a=require("../../util"),s=e(require("ssri")),c=require("../install/service/common"),u=require("../../common/Constants");var l;function f(t,e){return t.localeCompare(e)>=0?t:e}function g(t,e,i){return a.HashUtil.getDigest(e,i)===t}!function(t){t.ContentDir="content-v1",t.IndexDir="index-v1",t.IndexKeyPrefix="harmony:metadata:cache:"}(l||(l={})),exports.getPkgPath=function(e,d,h){return t(this,void 0,void 0,(function*(){const{integrity:y,tarball:p}=yield function(e,i){return t(this,void 0,void 0,(function*(){const t=(yield(0,c.getPackageInfoLocalFirst)(e,i)).versions[i];if(t){if(t.integrity&&t.resolved)return{integrity:t.integrity,tarball:t.resolved};const e=t.dist;if(e&&e.integrity&&e.tarball)return{integrity:e.integrity,tarball:e.tarball}}throw o.default.error("",`The integrity and tarball for package: ${e}@${i} not found.`),""}))}(e,d),v=s.default.parse(y),m=v.pickAlgorithm({pickAlgorithm:f}),x=v.hexDigest(),b=x.substring(0,2),k=x.substring(2,4),P=x.substring(4),$=r.config.getString(r.types.CACHE),q=n.default.join($,l.ContentDir,m,b,k);a.FsUtil.createDirIfNotExists(q);const _=n.default.join(q,P);let w=_;const C=n.default.join(h,u.Constants.MyModules,".tmp");n.default.join(C,`${e.replace("/","+")}@${d}.tgz`);if(a.FsUtil.existsSync(_)){const t=a.FsUtil.readFileSync(_);if(g(x,t,m))return o.default.debug("",`found package ${e}@${d} from cache file ${_}`),w}const D=yield(0,i.fetchPackage)(p,e,d);if(!g(x,D,m))throw o.default.error("",`The integrity check of package: ${e}@${d} failed.`),"";return a.FsUtil.writeFileSync(_,D),w}))};